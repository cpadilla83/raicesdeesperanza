import { and, eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, journalEntries, InsertJournalEntry, userProgress, InsertUserProgress, userBadges, UserProgress, userActivity, InsertUserActivity } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Journal Entries
export async function getJournalEntry(userId: number, dayNumber: number) {
  const db = await getDb();
  if (!db) return undefined;
  
  const result = await db.select().from(journalEntries)
    .where(and(eq(journalEntries.userId, userId), eq(journalEntries.dayNumber, dayNumber)))
    .limit(1);
  
  return result.length > 0 ? result[0] : undefined;
}

export async function getAllJournalEntries(userId: number) {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(journalEntries)
    .where(eq(journalEntries.userId, userId));
}

export async function upsertJournalEntry(userId: number, dayNumber: number, content: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const existing = await getJournalEntry(userId, dayNumber);
  
  if (existing) {
    await db.update(journalEntries)
      .set({ content, updatedAt: new Date() })
      .where(and(eq(journalEntries.userId, userId), eq(journalEntries.dayNumber, dayNumber)));
  } else {
    await db.insert(journalEntries).values({
      userId,
      dayNumber,
      content,
    });
  }
}

// User Progress
export async function getUserProgress(userId: number) {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(userProgress)
    .where(eq(userProgress.userId, userId));
}

export async function toggleDayCompletion(userId: number, dayNumber: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const existing = await db.select().from(userProgress)
    .where(and(eq(userProgress.userId, userId), eq(userProgress.dayNumber, dayNumber)))
    .limit(1);
  
  if (existing.length > 0) {
    const current = existing[0];
    const newCompleted = current.completed === 1 ? 0 : 1;
    
    await db.update(userProgress)
      .set({ completed: newCompleted, updatedAt: new Date() })
      .where(and(eq(userProgress.userId, userId), eq(userProgress.dayNumber, dayNumber)));
    
    return newCompleted === 1;
  } else {
    await db.insert(userProgress).values({
      userId,
      dayNumber,
      completed: 1,
    });
    return true;
  }
}

// User Badges
export async function getUserBadges(userId: number) {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(userBadges)
    .where(eq(userBadges.userId, userId))
    .orderBy(userBadges.earnedAt);
}

export async function awardBadge(userId: number, badgeType: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  // Check if user already has this badge
  const existing = await db.select().from(userBadges)
    .where(and(eq(userBadges.userId, userId), eq(userBadges.badgeType, badgeType)))
    .limit(1);
  
  if (existing.length > 0) {
    return null; // Already has this badge
  }
  
  await db.insert(userBadges).values({
    userId,
    badgeType,
  });
  
  return badgeType;
}

export async function checkAndAwardBadges(userId: number) {
  const db = await getDb();
  if (!db) return [];
  
  const progress = await getUserProgress(userId);
  const completedDays = progress.filter(p => p.completed === 1);
  
  if (completedDays.length === 0) return [];
  
  const newBadges: string[] = [];
  
  // Check for streak badges
  const streak = calculateCurrentStreak(completedDays);
  
  if (streak >= 7) {
    const badge = await awardBadge(userId, "streak_7");
    if (badge) newBadges.push(badge);
  }
  
  if (streak >= 30) {
    const badge = await awardBadge(userId, "streak_30");
    if (badge) newBadges.push(badge);
  }
  
  if (streak >= 100) {
    const badge = await awardBadge(userId, "streak_100");
    if (badge) newBadges.push(badge);
  }
  
  // Check for total completion badges
  const totalCompleted = completedDays.length;
  
  if (totalCompleted >= 30) {
    const badge = await awardBadge(userId, "total_30");
    if (badge) newBadges.push(badge);
  }
  
  if (totalCompleted >= 100) {
    const badge = await awardBadge(userId, "total_100");
    if (badge) newBadges.push(badge);
  }
  
  if (totalCompleted >= 365) {
    const badge = await awardBadge(userId, "complete_year");
    if (badge) newBadges.push(badge);
  }
  
  return newBadges;
}

function calculateCurrentStreak(completedDays: UserProgress[]): number {
  if (completedDays.length === 0) return 0;
  
  // Sort by day number descending
  const sorted = [...completedDays]
    .filter(p => p.completed === 1)
    .sort((a, b) => b.dayNumber - a.dayNumber);
  
  if (sorted.length === 0) return 0;
  
  let streak = 1;
  let currentDay = sorted[0].dayNumber;
  
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].dayNumber === currentDay - 1) {
      streak++;
      currentDay = sorted[i].dayNumber;
    } else {
      break;
    }
  }
  
  return streak;
}

// User display name functions
export async function updateUserDisplayName(userId: number, displayName: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.update(users)
    .set({ displayName })
    .where(eq(users.id, userId));
}

export async function getUserDisplayName(userId: number) {
  const db = await getDb();
  if (!db) return null;
  
  const result = await db.select({ displayName: users.displayName })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  
  return result[0]?.displayName || null;
}

// Activity tracking functions
export async function recordUserActivity(userId: number, sessionId: string) {
  const db = await getDb();
  if (!db) return;
  
  // Check if this session already exists
  const existing = await db.select().from(userActivity)
    .where(and(eq(userActivity.userId, userId), eq(userActivity.sessionId, sessionId)))
    .limit(1);
  
  if (existing.length > 0) {
    // Update last active time
    await db.update(userActivity)
      .set({ lastActiveAt: new Date() })
      .where(and(eq(userActivity.userId, userId), eq(userActivity.sessionId, sessionId)));
  } else {
    // Create new activity record
    await db.insert(userActivity).values({
      userId,
      sessionId,
    });
  }
}

// Global statistics functions
export async function getGlobalStats() {
  const db = await getDb();
  if (!db) return {
    totalUsers: 0,
    usersOnline: 0,
    activeThisMonth: 0,
  };
  
  // Total registered users
  const totalUsersResult = await db.select({ count: sql<number>`count(*)` })
    .from(users);
  const totalUsers = totalUsersResult[0]?.count || 0;
  
  // Users online (active in last 5 minutes)
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
  const usersOnlineResult = await db.select({ count: sql<number>`count(distinct ${userActivity.userId})` })
    .from(userActivity)
    .where(sql`${userActivity.lastActiveAt} > ${fiveMinutesAgo}`);
  const usersOnline = usersOnlineResult[0]?.count || 0;
  
  // Active users this month (have activity in current month)
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);
  
  const activeThisMonthResult = await db.select({ count: sql<number>`count(distinct ${userActivity.userId})` })
    .from(userActivity)
    .where(sql`${userActivity.createdAt} >= ${startOfMonth}`);
  const activeThisMonth = activeThisMonthResult[0]?.count || 0;
  
  return {
    totalUsers,
    usersOnline,
    activeThisMonth,
  };
}
