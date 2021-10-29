import { Router, Response, Request, NextFunction } from "express";
import { authRouter } from './auth.router'
import { bookRouter } from "./book.router";

export const router = Router();

router.use("/auth", authRouter)
router.use("/book", bookRouter)

router.get('/health-check', (_request: Request, response: Response, _next: NextFunction) => {
    return response.status(200).json({message: "server working"})
})