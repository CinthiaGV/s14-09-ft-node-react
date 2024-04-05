import { Router } from "express";
import { router as users } from "./users/routes.js";
import { router as matches } from "./matches/routes.js";

// eslint-disable-next-line new-cap
export const router = Router();

router.use("/users", users);
router.use("/matches", matches);
