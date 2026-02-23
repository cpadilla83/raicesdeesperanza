import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import * as db from "./db";

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

describe("Journal Entries", () => {
  it("should save and retrieve a journal entry", async () => {
    const ctx = createAuthContext(999);
    const caller = appRouter.createCaller(ctx);

    // Save a journal entry
    const saveResult = await caller.journal.saveEntry({
      dayNumber: 1,
      content: "Hoy estoy agradecido por la vida.",
    });

    expect(saveResult).toEqual({ success: true });

    // Retrieve the journal entry
    const entry = await caller.journal.getEntry({ dayNumber: 1 });

    expect(entry).toBeDefined();
    expect(entry?.content).toBe("Hoy estoy agradecido por la vida.");
    expect(entry?.dayNumber).toBe(1);
    expect(entry?.userId).toBe(999);
  });

  it("should update an existing journal entry", async () => {
    const ctx = createAuthContext(998);
    const caller = appRouter.createCaller(ctx);

    // Save initial entry
    await caller.journal.saveEntry({
      dayNumber: 2,
      content: "Primera versión",
    });

    // Update the entry
    await caller.journal.saveEntry({
      dayNumber: 2,
      content: "Segunda versión actualizada",
    });

    // Retrieve and verify
    const entry = await caller.journal.getEntry({ dayNumber: 2 });

    expect(entry?.content).toBe("Segunda versión actualizada");
  });

  it("should retrieve all journal entries for a user", async () => {
    const ctx = createAuthContext(997);
    const caller = appRouter.createCaller(ctx);

    // Save multiple entries
    await caller.journal.saveEntry({
      dayNumber: 1,
      content: "Día 1",
    });

    await caller.journal.saveEntry({
      dayNumber: 5,
      content: "Día 5",
    });

    await caller.journal.saveEntry({
      dayNumber: 10,
      content: "Día 10",
    });

    // Retrieve all entries
    const entries = await caller.journal.getAllEntries();

    expect(entries.length).toBeGreaterThanOrEqual(3);
    const dayNumbers = entries.map(e => e.dayNumber);
    expect(dayNumbers).toContain(1);
    expect(dayNumbers).toContain(5);
    expect(dayNumbers).toContain(10);
  });
});

// Note: Progress functionality is tested indirectly through the badges tests
// which use toggleDay and verify the progress tracking works correctly
