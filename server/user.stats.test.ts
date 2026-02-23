import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { Context } from "./_core/context";

describe("User and Stats Procedures", () => {
  const mockUser = {
    id: 1,
    openId: "test-user-123",
    name: "Test User",
    email: "test@example.com",
    loginMethod: "oauth",
    role: "user" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const createMockContext = (user: typeof mockUser | null = mockUser): Context => ({
    req: {} as any,
    res: {} as any,
    user,
  });

  describe("user.updateDisplayName", () => {
    it("should update user display name", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.user.updateDisplayName({
        displayName: "Juan Pérez",
      });

      expect(result.success).toBe(true);
    });

    it("should reject empty display name", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.user.updateDisplayName({ displayName: "" })
      ).rejects.toThrow();
    });

    it("should reject display name longer than 100 characters", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const longName = "a".repeat(101);
      await expect(
        caller.user.updateDisplayName({ displayName: longName })
      ).rejects.toThrow();
    });
  });

  describe("user.getDisplayName", () => {
    it("should return user display name", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      // First set a display name
      await caller.user.updateDisplayName({ displayName: "María García" });

      // Then retrieve it
      const displayName = await caller.user.getDisplayName();
      expect(displayName).toBeTruthy();
    });
  });

  describe("stats.getStats", () => {
    it("should return global statistics", async () => {
      const ctx = createMockContext(null); // Public procedure
      const caller = appRouter.createCaller(ctx);

      const stats = await caller.stats.getStats();

      expect(stats).toHaveProperty("totalUsers");
      expect(stats).toHaveProperty("usersOnline");
      expect(stats).toHaveProperty("activeThisMonth");
      expect(typeof stats.totalUsers).toBe("number");
      expect(typeof stats.usersOnline).toBe("number");
      expect(typeof stats.activeThisMonth).toBe("number");
      expect(stats.totalUsers).toBeGreaterThanOrEqual(0);
      expect(stats.usersOnline).toBeGreaterThanOrEqual(0);
      expect(stats.activeThisMonth).toBeGreaterThanOrEqual(0);
    });
  });

  describe("stats.recordActivity", () => {
    it("should record user activity", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const sessionId = `test-session-${Date.now()}`;
      const result = await caller.stats.recordActivity({ sessionId });

      expect(result.success).toBe(true);
    });

    it("should update existing session activity", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const sessionId = `test-session-${Date.now()}`;
      
      // Record activity twice with same session ID
      await caller.stats.recordActivity({ sessionId });
      const result = await caller.stats.recordActivity({ sessionId });

      expect(result.success).toBe(true);
    });

    it("should require authentication", async () => {
      const ctx = createMockContext(null);
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.stats.recordActivity({ sessionId: "test" })
      ).rejects.toThrow();
    });
  });
});
