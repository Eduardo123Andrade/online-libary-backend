import { BookService } from './../../services/book.service';
import { Request, Response } from "express"
import httpStatus from 'http-status';
import { CustomFileType } from 'src/types/file.type';


const createBook = async (request: Request, response: Response) => {
    const { title, description, page } = request.body
    const requestImage = request.file as CustomFileType
    const { location: imagePath } = requestImage

    const book = await BookService.createBook({ title, description, page, imagePath })

    return response.status(httpStatus.CREATED).json({ book })
}

const findBookById = async (request: Request, response: Response) => {
    const { bookId } = request.params

    const book = await BookService.findBookById(bookId)

    return response.status(httpStatus.OK).json({ book })
}

const listBooks = async (_request: Request, response: Response) => {

    const books = await BookService.listBooks()

    return response.status(httpStatus.OK).json({ books })
}


export const BookController = {
    createBook,
    findBookById,
    listBooks,
}