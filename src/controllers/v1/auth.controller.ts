import { Request, Response } from "express"
import httpStatus from "http-status"
import { AuthService } from "../../services"


const createUser = async (request: Request, response: Response) => {
    const { name, email, password } = request.body

    const user = await AuthService.createUser({ name, email, password })

    return response.status(httpStatus.CREATED).json(user)
}

const login = async (request: Request, response: Response) => {
    const {email, password} = request.body

    const user = await AuthService.login(email, password)

    return response.status(httpStatus.OK).json(user)
}


export const AuthController = {
    createUser,
    login
}