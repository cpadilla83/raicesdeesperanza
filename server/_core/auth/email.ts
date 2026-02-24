import type { Express, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "../cookies";
import * as db from "../../db";

const registerSchema = z.object({
  email: z.string().email().max(320),
  password: z.string().min(8).max(72),
  name: z.string().min(2).max(80).optional(),
});

const loginSchema = z.object({
  email: z.string().email().max(320),
  password: z.string().min(1).max(72),
});

function emailToOpenId(email: string) {
  const normalized = email.trim().toLowerCase();
  const raw = `email:${normalized}`;
  return raw.length <= 64 ? raw : raw.slice(0, 64);
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

/**
 * En localhost (http) forzamos secure:false y sameSite:lax
 * para evitar que el navegador bloquee cookies.
 */
function cookieOptionsForEnv(req: Request) {
  const isLocal =
    req.hostname === "localhost" ||
    req.hostname === "127.0.0.1" ||
    req.hostname === "::1";

  if (isLocal) {
    return {
      httpOnly: true as const,
      secure: false as const,
      sameSite: "lax" as const,
      path: "/" as const,
    };
  }

  return getSessionCookieOptions(req);
}

export function registerEmailAuthRoutes(app: Express) {
  // ✅ Registro
  app.post("/api/auth/email/register", async (req: Request, res: Response) => {
    try {
      const parsed = registerSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ error: "Datos inválidos" });

      const email = normalizeEmail(parsed.data.email);
      const password = parsed.data.password;
      const name = parsed.data.name?.trim() || null;

      const existing = await db.getUserByEmail(email);
      if (existing) return res.status(409).json({ error: "Este correo ya está registrado" });

      const openId = emailToOpenId(email);
      const passwordHash = await bcrypt.hash(password, 10);

      await db.upsertUser({
        openId,
        name,
        email,
        loginMethod: "email",
        lastSignedIn: new Date(),
        passwordHash,
      });

      const user = await db.getUserByOpenId(openId);
      if (!user) return res.status(500).json({ error: "No se pudo crear el usuario" });

      const { sessionId, expiresAt } = await db.createAuthSession(user.id, req);
      const cookieOptions = cookieOptionsForEnv(req);
      const maxAge = Math.max(0, new Date(expiresAt).getTime() - Date.now());

      res.cookie(COOKIE_NAME, sessionId, { ...cookieOptions, maxAge });
      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("[EmailAuth] register error:", err);
      return res.status(500).json({ error: "Error registrando" });
    }
  });

  // ✅ Login
  app.post("/api/auth/email/login", async (req: Request, res: Response) => {
    try {
      const parsed = loginSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ error: "Datos inválidos" });

      const email = normalizeEmail(parsed.data.email);
      const password = parsed.data.password;

      const user = await db.getUserByEmail(email);
      if (!user || !user.passwordHash) return res.status(401).json({ error: "Credenciales inválidas" });

      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) return res.status(401).json({ error: "Credenciales inválidas" });

      await db.upsertUser({
        openId: user.openId,
        lastSignedIn: new Date(),
        loginMethod: "email",
      });

      const { sessionId, expiresAt } = await db.createAuthSession(user.id, req);
      const cookieOptions = cookieOptionsForEnv(req);
      const maxAge = Math.max(0, new Date(expiresAt).getTime() - Date.now());

      res.cookie(COOKIE_NAME, sessionId, { ...cookieOptions, maxAge });
      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("[EmailAuth] login error:", err);
      return res.status(500).json({ error: "Error iniciando sesión" });
    }
  });
}