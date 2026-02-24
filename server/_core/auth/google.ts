import type { Express, Request, Response } from "express";
import { Issuer } from "openid-client";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "../cookies";
import * as db from "../../db";

function must(v: string | undefined, name: string) {
  if (!v) throw new Error(`[GoogleAuth] Missing env var: ${name}`);
  return v;
}

const GOOGLE_CLIENT_ID = () => must(process.env.GOOGLE_CLIENT_ID, "GOOGLE_CLIENT_ID");
const GOOGLE_CLIENT_SECRET = () => must(process.env.GOOGLE_CLIENT_SECRET, "GOOGLE_CLIENT_SECRET");
const GOOGLE_REDIRECT_URI = () => must(process.env.GOOGLE_REDIRECT_URI, "GOOGLE_REDIRECT_URI");

async function getClient() {
  // Discovery oficial de Google
  const google = await Issuer.discover("https://accounts.google.com");
  return new google.Client({
    client_id: GOOGLE_CLIENT_ID(),
    client_secret: GOOGLE_CLIENT_SECRET(),
    redirect_uris: [GOOGLE_REDIRECT_URI()],
    response_types: ["code"],
  });
}

function makeOpenIdFromGoogleSub(sub: string) {
  // users.openId es VARCHAR(64). Usamos prefijo estable.
  const raw = `google:${sub}`;
  return raw.length <= 64 ? raw : raw.slice(0, 64);
}

function randomString() {
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}

/**
 * Rutas:
 * - GET  /api/auth/google/start
 * - GET  /api/auth/google/callback
 */
export function registerGoogleAuthRoutes(app: Express) {
  // START: manda al login típico de Google
  app.get("/api/auth/google/start", async (req: Request, res: Response) => {
    try {
      const client = await getClient();

      const state = randomString();
      const nonce = randomString();

      // ✅ COOKIES TEMPORALES: forzadas para funcionar en localhost (HTTP)
      // No usar getSessionCookieOptions aquí, porque puede devolver sameSite:none + secure:true
      // (y en HTTP el navegador NO manda esas cookies en el callback).
      res.cookie("g_state", state, {
        httpOnly: true,
        secure: false,
        sameSite: "lax" as const,
        path: "/",
        maxAge: 10 * 60 * 1000, // 10 minutos
      });

      res.cookie("g_nonce", nonce, {
        httpOnly: true,
        secure: false,
        sameSite: "lax" as const,
        path: "/",
        maxAge: 10 * 60 * 1000, // 10 minutos
      });

      const url = client.authorizationUrl({
        scope: "openid email profile",
        state,
        nonce,
        prompt: "select_account",
      });

      return res.redirect(url);
    } catch (err: any) {
      console.error("[GoogleAuth] start error:", err);
      return res.status(500).send(`Google auth start failed: ${err?.message ?? "unknown"}`);
    }
  });

  // CALLBACK: Google regresa con "code"
  app.get("/api/auth/google/callback", async (req: Request, res: Response) => {
    try {
      const client = await getClient();

      const stateCookie = req.cookies?.g_state as string | undefined;
      const nonceCookie = req.cookies?.g_nonce as string | undefined;

      // Limpia temporales (ok aunque fallen)
      res.clearCookie("g_state", { path: "/" });
      res.clearCookie("g_nonce", { path: "/" });

      if (!stateCookie || !nonceCookie) {
        console.error("[GoogleAuth] Missing state/nonce cookies", {
          host: req.headers.host,
          origin: req.headers.origin,
          hasState: Boolean(stateCookie),
          hasNonce: Boolean(nonceCookie),
        });
        return res
          .status(400)
          .send(
            "Faltan cookies de seguridad (state/nonce). Asegúrate de entrar por http://localhost:3001 (no 127.0.0.1) y reintenta."
          );
      }

      const params = client.callbackParams(req);

      const tokenSet = await client.callback(GOOGLE_REDIRECT_URI(), params, {
        state: stateCookie,
        nonce: nonceCookie,
      });

      const claims = tokenSet.claims();
      const sub = String(claims.sub);
      const email = claims.email ? String(claims.email) : null;
      const name = claims.name ? String(claims.name) : null;

      const openId = makeOpenIdFromGoogleSub(sub);

      // 1) Upsert user
      await db.upsertUser({
        openId,
        name,
        email,
        loginMethod: "google",
        lastSignedIn: new Date(),
      });

      // 2) Fetch user row (necesitamos user.id numérico)
      const user = await db.getUserByOpenId(openId);
      if (!user) {
        console.error("[GoogleAuth] User not found after upsert", { openId });
        return res.status(500).send("User not found after upsert");
      }

      // 3) Create session in DB (auth_sessions)
      const { sessionId, expiresAt } = await db.createAuthSession(user.id, req);

      // 4) Set cookie de sesión principal
      const cookieOptions = getSessionCookieOptions(req);
      const maxAge = Math.max(0, new Date(expiresAt).getTime() - Date.now());

      res.cookie(COOKIE_NAME, sessionId, { ...cookieOptions, maxAge });

      return res.redirect("/");
    } catch (err: any) {
      console.error("[GoogleAuth] callback error FULL:", err);
      const msg = err?.message ?? "unknown";
      return res.status(500).send(`Google auth callback failed: ${msg}`);
    }
  });
}