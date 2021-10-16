import { MulterConfig } from './../../config/multer.config';
import { BookController } from './../../controllers/v1/book.controller';
import { Router } from 'express';
import multer from "multer";

const uploadImages = multer(MulterConfig)

export const bookRouter = Router()

bookRouter.post('/create-book', uploadImages.single('image'), BookController.createBook)
bookRouter.get('/find-book-by-id/:bookId', BookController.findBookById)
bookRouter.get('/list-books', BookController.listBooks)
