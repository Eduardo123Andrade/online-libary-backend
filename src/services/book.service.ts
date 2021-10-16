import { CustomError } from './../errors/CustomError';
import { Book } from './../models/book.model';
import { getRepository } from 'typeorm';
import { BookInitialData } from './../interface/book.interface';
import httpStatus from 'http-status';


const createBook = async (bookData: BookInitialData) => {
    const repository = getRepository(Book)
    const createdBook = repository.create({ ...bookData })
    const book = await repository.save(createdBook)

    return book
}

const findBookById = async (id: string) => {
    const book = await getRepository(Book).findOne({ where: { id } })

    if (!book) {
        throw new CustomError(httpStatus.NOT_FOUND, "Book not found");
    }

    return book
}

const listBooks = async () => await getRepository(Book).find()


export const BookService = {
    createBook,
    findBookById,
    listBooks,
}