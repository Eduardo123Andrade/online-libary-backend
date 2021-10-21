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
    const orderedBooks = books.sort((a, b ) => {
        if(a.title < b.title) return -1
        if(a.title > b.title) return 1
        return 0
    }) 

    return response.status(httpStatus.OK).json(orderedBooks)
}


export const BookController = {
    createBook,
    findBookById,
    listBooks,
}