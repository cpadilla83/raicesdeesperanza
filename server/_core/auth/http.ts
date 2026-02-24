import type { Express, Request, Response } from "express";
import { COOKIE_NAME } from "@shared/const";
import { getUserBySessionId, revokeAuthSession } from "../../db";
import { getSessionCookieOptions } from "../cookies";

export function registerAuthHttpRoutes(app: Express) {
  app.get("/api/auth/me", async (req: Request, res: Response) => {
    try {
      const sessionId = req.cookies?.[COOKIE_NAME];
      const user = await getUserBySessionId(sessionId);

      if (!user) return res.status(200).json({ user: null });

      return res.status(200).json({
        user: {
          id: user.id,
          openId: user.openId,
          name: user.name,
          displayName: user.displayName,
          email: user.email,
          loginMethod: user.loginMethod,
          role: user.role,
          lastSignedIn: user.lastSignedIn,
        },
      });
    } catch (err) {
      console.error("[Auth] /api/auth/me error:", err);
      return res.status(500).json({ user: null });
    }
  });

  app.post("/api/auth/logout", async (req: Request, res: Response) => {
    try {
      const sessionId = req.cookies?.[COOKIE_NAME];
      if (sessionId) await revokeAuthSession(sessionId);

      const cookieOptions = getSessionCookieOptions(req);
      res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: 0 });

      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("[Auth] /api/auth/logout error:", err);
      return res.status(500).json({ ok: false });
    }
  });
}