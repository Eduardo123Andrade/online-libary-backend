import { AuthController } from './../../controllers/v1/auth.controller';
import { Router } from 'express';


export const authRouter = Router();

authRouter.post("/create-user", AuthController.createUser)
authRouter.post('/login', AuthController.login)