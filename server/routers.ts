import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  journal: router({
    getEntry: protectedProcedure
      .input(z.object({ dayNumber: z.number().min(1).max(365) }))
      .query(async ({ ctx, input }) => {
        return await db.getJournalEntry(ctx.user.id, input.dayNumber);
      }),
    
    getAllEntries: protectedProcedure
      .query(async ({ ctx }) => {
        return await db.getAllJournalEntries(ctx.user.id);
      }),
    
    saveEntry: protectedProcedure
      .input(z.object({
        dayNumber: z.number().min(1).max(365),
        content: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.upsertJournalEntry(ctx.user.id, input.dayNumber, input.content);
        return { success: true };
      }),
  }),

  progress: router({
    getProgress: protectedProcedure
      .query(async ({ ctx }) => {
        return await db.getUserProgress(ctx.user.id);
      }),
    
    toggleDay: protectedProcedure
      .input(z.object({ dayNumber: z.number().min(1).max(365) }))
      .mutation(async ({ ctx, input }) => {
        const isCompleted = await db.toggleDayCompletion(ctx.user.id, input.dayNumber);
        
        // Check and award badges if day was completed
        let newBadges: string[] = [];
        if (isCompleted) {
          newBadges = await db.checkAndAwardBadges(ctx.user.id);
        }
        
        return { isCompleted, newBadges };
      }),
  }),

  badges: router({
    getBadges: protectedProcedure
      .query(async ({ ctx }) => {
        return await db.getUserBadges(ctx.user.id);
      }),
    
    checkBadges: protectedProcedure
      .mutation(async ({ ctx }) => {
        const newBadges = await db.checkAndAwardBadges(ctx.user.id);
        return { newBadges };
      }),
  }),

  user: router({
    updateDisplayName: protectedProcedure
      .input(z.object({ displayName: z.string().min(1).max(100) }))
      .mutation(async ({ ctx, input }) => {
        await db.updateUserDisplayName(ctx.user.id, input.displayName);
        return { success: true };
      }),
    
    getDisplayName: protectedProcedure
      .query(async ({ ctx }) => {
        return await db.getUserDisplayName(ctx.user.id);
      }),
  }),

  stats: router({
    getStats: publicProcedure
      .query(async () => {
        return await db.getGlobalStats();
      }),
    
    recordActivity: protectedProcedure
      .input(z.object({ sessionId: z.string() }))
      .mutation(async ({ ctx, input }) => {
        await db.recordUserActivity(ctx.user.id, input.sessionId);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
