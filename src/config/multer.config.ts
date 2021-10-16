import { Request } from "express";
import { diskStorage, Options as MulterOptions } from "multer";
import path from 'path'


const filenameFunction = (_request: Request, file: Express.Multer.File, callbackFunction: Function) => {
    const filename = `${Date.now()}-${file.originalname}`

    callbackFunction(null, filename)
}

export const MulterConfig: MulterOptions = {
    storage: diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads', 'images', 'book-cover'),
        filename: filenameFunction,
    })
}