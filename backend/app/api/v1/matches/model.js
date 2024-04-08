import { z } from "zod";

export const MatchSchema = z.object({
  userEmisorId: z.string().uuid(),
  userReceptorId: z.string().uuid(),
  status: z.boolean().optional(),
});
