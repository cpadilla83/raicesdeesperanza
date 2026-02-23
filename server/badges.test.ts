import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(userId: number = 1): TrpcContext {
  const user: AuthenticatedUser = {
    id: userId,
    openId: `test-user-${userId}`,
    email: `test${userId}@example.com`,
    name: `Test User ${userId}`,
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("Badges System", () => {
  it("should award streak_7 badge after 7 consecutive days", async () => {
    const ctx = createAuthContext(800);
    const caller = appRouter.createCaller(ctx);

    // Complete 7 consecutive days
    for (let i = 1; i <= 7; i++) {
      await caller.progress.toggleDay({ dayNumber: i });
    }

    // Check badges
    const badges = await caller.badges.getBadges();
    const badgeTypes = badges.map(b => b.badgeType);

    expect(badgeTypes).toContain("streak_7");
  });

  it("should award total_30 badge after completing 30 days (not necessarily consecutive)", async () => {
    const ctx = createAuthContext(801);
    const caller = appRouter.createCaller(ctx);

    // Complete 30 non-consecutive days
    for (let i = 1; i <= 60; i += 2) {
      await caller.progress.toggleDay({ dayNumber: i });
    }

    // Check badges
    const badges = await caller.badges.getBadges();
    const badgeTypes = badges.map(b => b.badgeType);

    expect(badgeTypes).toContain("total_30");
  });

  it("should not award duplicate badges", async () => {
    const ctx = createAuthContext(802);
    const caller = appRouter.createCaller(ctx);

    // Complete 10 consecutive days
    for (let i = 1; i <= 10; i++) {
      await caller.progress.toggleDay({ dayNumber: i });
    }

    // Check badges first time
    const badges1 = await caller.badges.getBadges();
    const count1 = badges1.filter(b => b.badgeType === "streak_7").length;

    // Complete more days
    for (let i = 11; i <= 15; i++) {
      await caller.progress.toggleDay({ dayNumber: i });
    }

    // Check badges again
    const badges2 = await caller.badges.getBadges();
    const count2 = badges2.filter(b => b.badgeType === "streak_7").length;

    // Should still have only one streak_7 badge
    expect(count1).toBe(1);
    expect(count2).toBe(1);
  });

  it("should return new badges when toggling day completion", async () => {
    const ctx = createAuthContext(9805);
    const caller = appRouter.createCaller(ctx);

    // Complete first 6 days
    for (let i = 1; i <= 6; i++) {
      await caller.progress.toggleDay({ dayNumber: i });
    }

    // Complete 7th day - should get badge
    const result = await caller.progress.toggleDay({ dayNumber: 7 });

    expect(result.isCompleted).toBe(true);
    expect(result.newBadges).toBeDefined();
    expect(result.newBadges).toContain("streak_7");
  });

  it("should retrieve all user badges", async () => {
    const ctx = createAuthContext(804);
    const caller = appRouter.createCaller(ctx);

    // Complete enough days to get multiple badges
    for (let i = 1; i <= 35; i++) {
      await caller.progress.toggleDay({ dayNumber: i });
    }

    const badges = await caller.badges.getBadges();

    expect(badges.length).toBeGreaterThan(0);
    expect(badges[0]).toHaveProperty("badgeType");
    expect(badges[0]).toHaveProperty("earnedAt");
  });
});
