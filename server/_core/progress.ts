import type { Express, Request, Response } from "express";
import { COOKIE_NAME } from "@shared/const";
import { getUserBySessionId, getUserProgress, toggleDayCompletion } from "../db";

type DevotionalType = "raices" | "legado" | "atletas";

function isDevotionalType(v: any): v is DevotionalType {
  return v === "raices" || v === "legado" || v === "atletas";
}

async function requireUser(req: Request, res: Response) {
  const sessionId = req.cookies?.[COOKIE_NAME] as string | undefined;
  const user = await getUserBySessionId(sessionId);
  if (!user) {
    res.status(401).json({ error: "No autenticado" });
    return null;
  }
  return user;
}

export function registerProgressRoutes(app: Express) {
  // GET /api/progress?devotionalType=raices
  app.get("/api/progress", async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;

    const devotionalType = req.query.devotionalType;
    if (!isDevotionalType(devotionalType)) return res.status(400).json({ error: "devotionalType inválido" });

    const rows = await getUserProgress(user.id, devotionalType);
    const completedDays = rows.filter((r) => r.completed === 1).map((r) => r.dayNumber);

    res.json({ completedDays });
  });

  // POST /api/progress/toggle  { devotionalType, dayNumber }
  app.post("/api/progress/toggle", async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;

    const { devotionalType, dayNumber } = req.body ?? {};
    if (!isDevotionalType(devotionalType)) return res.status(400).json({ error: "devotionalType inválido" });
    const dn = Number(dayNumber);
    if (!Number.isFinite(dn) || dn < 1 || dn > 365) return res.status(400).json({ error: "dayNumber inválido" });

    const completed = await toggleDayCompletion(user.id, devotionalType, dn);
    res.json({ completed });
  });
}