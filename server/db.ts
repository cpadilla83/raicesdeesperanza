import { and, eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import type { Pool } from "mysql2/promise";
import type { Request } from "express";
import { randomBytes } from "node:crypto";

import {
  InsertUser,
  users,
  journalEntries,
  userProgress,
  userBadges,
  UserProgress,
  userActivity,
  authSessions,
  type User,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;
let _pool: Pool | null = null;

const SESSION_TTL_DAYS = Number(process.env.SESSION_TTL_DAYS || "30");
type DevotionalType = "raices" | "legado" | "atletas";

function daysFromNow(days: number) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}

function randomSessionId(): string {
  return randomBytes(32).toString("hex");
}

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      if (!_pool) _pool = mysql.createPool(process.env.DATABASE_URL);
      _db = drizzle(_pool as any);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

/** ========== AUTH SESSIONS ========== */

export async function createAuthSession(userId: number, req?: Request) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const sessionId = randomSessionId();
  const expiresAt = daysFromNow(SESSION_TTL_DAYS);

  const userAgent = req?.headers?.["user-agent"] ? String(req.headers["user-agent"]) : null;
  const forwarded = req?.headers?.["x-forwarded-for"];
  const ip = typeof forwarded === "string" ? forwarded.split(",")[0]?.trim() : req?.ip ?? null;

  await db.insert(authSessions).values({
    id: sessionId,
    userId,
    userAgent,
    ip,
    expiresAt,
    revokedAt: null,
  });

  return { sessionId, expiresAt };
}

export async function getUserBySessionId(sessionId: string | undefined): Promise<User | null> {
  if (!sessionId) return null;
  const db = await getDb();
  if (!db) return null;

  const now = new Date();

  const sess = await db
    .select({
      id: authSessions.id,
      userId: authSessions.userId,
      expiresAt: authSessions.expiresAt,
      revokedAt: authSessions.revokedAt,
    })
    .from(authSessions)
    .where(eq(authSessions.id, sessionId))
    .limit(1);

  const s = sess[0];
  if (!s) return null;
  if (s.revokedAt) return null;
  if (new Date(s.expiresAt).getTime() <= now.getTime()) return null;

  const u = await db.select().from(users).where(eq(users.id, s.userId)).limit(1);
  return u[0] ?? null;
}

export async function revokeAuthSession(sessionId: string) {
  const db = await getDb();
  if (!db) return;
  await db.update(authSessions).set({ revokedAt: new Date() }).where(eq(authSessions.id, sessionId));
}

/** ========== USERS ========== */

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  const values: InsertUser = { openId: user.openId };
  const updateSet: Record<string, unknown> = {};

  const textFields = ["name", "email", "loginMethod", "displayName", "passwordHash"] as const;
  type TextField = (typeof textFields)[number];

  for (const field of textFields) {
    const value = (user as any)[field];
    if (value === undefined) continue;
    const normalized = value ?? null;
    (values as any)[field] = normalized;
    updateSet[field] = normalized;
  }

  if (user.lastSignedIn !== undefined) {
    values.lastSignedIn = user.lastSignedIn;
    updateSet.lastSignedIn = user.lastSignedIn;
  }

  if (user.role !== undefined) {
    values.role = user.role;
    updateSet.role = user.role;
  } else if (user.openId === ENV.ownerOpenId) {
    values.role = "admin";
    updateSet.role = "admin";
  }

  if (!values.lastSignedIn) values.lastSignedIn = new Date();
  if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();

  await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

/** ========== JOURNAL (NOW WITH devotionalType) ========== */

export async function getJournalEntry(userId: number, devotionalType: DevotionalType, dayNumber: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(journalEntries)
    .where(
      and(
        eq(journalEntries.userId, userId),
        eq(journalEntries.devotionalType, devotionalType),
        eq(journalEntries.dayNumber, dayNumber)
      )
    )
    .limit(1);

  return result[0];
}

export async function getAllJournalEntries(userId: number, devotionalType: DevotionalType) {
  const db = await getDb();
  if (!db) return [];
  return await db
    .select()
    .from(journalEntries)
    .where(and(eq(journalEntries.userId, userId), eq(journalEntries.devotionalType, devotionalType)));
}

export async function upsertJournalEntry(
  userId: number,
  devotionalType: DevotionalType,
  dayNumber: number,
  content: string
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const existing = await getJournalEntry(userId, devotionalType, dayNumber);

  if (existing) {
    await db
      .update(journalEntries)
      .set({ content, updatedAt: new Date() })
      .where(eq(journalEntries.id, existing.id));
  } else {
    await db.insert(journalEntries).values({
      userId,
      devotionalType,
      dayNumber,
      content,
    });
  }
}

/** ========== PROGRESS (NOW WITH devotionalType) ========== */

export async function getUserProgress(userId: number, devotionalType: DevotionalType) {
  const db = await getDb();
  if (!db) return [];
  return await db
    .select()
    .from(userProgress)
    .where(and(eq(userProgress.userId, userId), eq(userProgress.devotionalType, devotionalType)));
}

export async function toggleDayCompletion(userId: number, devotionalType: DevotionalType, dayNumber: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const existing = await db
    .select()
    .from(userProgress)
    .where(
      and(
        eq(userProgress.userId, userId),
        eq(userProgress.devotionalType, devotionalType),
        eq(userProgress.dayNumber, dayNumber)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    const current = existing[0];
    const newCompleted = current.completed === 1 ? 0 : 1;

    await db
      .update(userProgress)
      .set({ completed: newCompleted, updatedAt: new Date() })
      .where(eq(userProgress.id, current.id));

    return newCompleted === 1;
  } else {
    await db.insert(userProgress).values({
      userId,
      devotionalType,
      dayNumber,
      completed: 1,
    });
    return true;
  }
}

/** ========== GLOBAL STATS (unchanged) ========== */

export async function getGlobalStats() {
  const db = await getDb();
  if (!db) return { totalUsers: 0, usersOnline: 0, activeThisMonth: 0 };

  const totalUsersResult = await db.select({ count: sql<number>`count(*)` }).from(users);
  const totalUsers = totalUsersResult[0]?.count || 0;

  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
  const usersOnlineResult = await db
    .select({ count: sql<number>`count(distinct ${userActivity.userId})` })
    .from(userActivity)
    .where(sql`${userActivity.lastActiveAt} > ${fiveMinutesAgo}`);
  const usersOnline = usersOnlineResult[0]?.count || 0;

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const activeThisMonthResult = await db
    .select({ count: sql<number>`count(distinct ${userActivity.userId})` })
    .from(userActivity)
    .where(sql`${userActivity.createdAt} >= ${startOfMonth}`);
  const activeThisMonth = activeThisMonthResult[0]?.count || 0;

  return { totalUsers, usersOnline, activeThisMonth };
}