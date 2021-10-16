import { encoder } from './../utils/encoder';
import { User } from '../models/user.model';
import { getRepository } from 'typeorm';
import { UserInitialData } from './../interface/user.interface';
import { CustomError } from '../errors/CustomError';
import httpStatus from 'http-status';


const createUser = async (user: UserInitialData) => {
    const repository = getRepository(User)
    const { password } = user

    const encryptedPassword = await encoder.codify(password)
    Object.assign(user, { password: encryptedPassword })

    const createdUser = repository.create({ ...user })
    const savedUser = await repository.save(createdUser)

    return savedUser
}

const login = async (email: string, password: string) => {
    const repository = getRepository(User)
    const user = await repository.findOne({ where: { email } })

    if (!user) {
        throw new CustomError(httpStatus.NOT_FOUND, "User not found")
    }

    const { password: encryptedPassword } = user

    const isValidPassword = encoder.verifyPassword(password, encryptedPassword)

    if(!isValidPassword) {
        throw new CustomError(httpStatus.UNAUTHORIZED, "invalid email or password")
    }

    return user
}


export const AuthService = {
    createUser,
    login
}