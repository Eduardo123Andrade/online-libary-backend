import { Router } from "express";
import { authRouter } from './auth.router'
import { bookRouter } from "./book.router";

export const router = Router();

router.use("/auth", authRouter)
router.use("/book", bookRouter)