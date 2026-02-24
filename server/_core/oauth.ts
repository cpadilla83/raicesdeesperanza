import { COOKIE_NAME } from "@shared/const";
import type { Express, Request, Response } from "express";
import * as db from "../db";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";

function getQueryParam(req: Request, key: string): string | undefined {
  const value = req.query[key];
  return typeof value === "string" ? value : undefined;
}

export function registerOAuthRoutes(app: Express) {
  app.get("/api/oauth/callback", async (req: Request, res: Response) => {
    const code = getQueryParam(req, "code");
    const state = getQueryParam(req, "state");

    if (!code || !state) {
      res.status(400).json({ error: "code and state are required" });
      return;
    }

    try {
      const tokenResponse = await sdk.exchangeCodeForToken(code, state);
      const userInfo = await sdk.getUserInfo(tokenResponse.accessToken);

      if (!userInfo.openId) {
        res.status(400).json({ error: "openId missing from user info" });
        return;
      }

      // 1) Upsert user
      await db.upsertUser({
        openId: userInfo.openId,
        name: userInfo.name || null,
        email: userInfo.email ?? null,
        loginMethod: userInfo.loginMethod ?? userInfo.platform ?? null,
        lastSignedIn: new Date(),
      });

      // 2) Get user row (we need numeric userId)
      const user = await db.getUserByOpenId(userInfo.openId);
      if (!user) {
        res.status(500).json({ error: "User upserted but could not be fetched" });
        return;
      }

      // 3) Create OUR auth session in DB (multi-device ready)
      const { sessionId, expiresAt } = await db.createAuthSession(user.id, req);

      // 4) Set cookie with our sessionId (httpOnly)
      const cookieOptions = getSessionCookieOptions(req);
      const maxAge = Math.max(0, new Date(expiresAt).getTime() - Date.now());

      // Important:
      // We keep COOKIE_NAME to avoid breaking the client that expects that cookie name.
      // This cookie now stores our DB sessionId (auth_sessions.id)
      res.cookie(COOKIE_NAME, sessionId, { ...cookieOptions, maxAge });

      // (Optional) track activity using the auth sessionId as session key
      // await db.recordUserActivity(user.id, sessionId);

      // 5) Redirect back to app
      res.redirect(302, "/");
    } catch (error) {
      console.error("[OAuth] Callback failed", error);
      res.status(500).json({ error: "OAuth callback failed" });
    }
  });
}