import { z } from "zod";
import { procedure, router } from "../trpc";
import { prisma } from "../prisma";

export const appRouter = router({
  users: procedure.query(async () => {
    const users = await prisma.user.findMany();

    return { users };
  }),
});

export type AppRouter = typeof appRouter;
