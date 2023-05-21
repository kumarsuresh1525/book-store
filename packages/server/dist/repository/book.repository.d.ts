import { Model } from 'mongoose';
import { CreateBookDto } from 'src/dto/book/book.dto';
import { Book, BookDocument } from 'src/entity/book.entity';
export declare class BookRepository {
    private readonly bookModel;
    constructor(bookModel: Model<BookDocument>);
    getAllBooks(filter: any): Promise<Book[]>;
    createBook(createBook: CreateBookDto): Promise<Book>;
}
