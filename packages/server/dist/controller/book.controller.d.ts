import { CreateBookDto } from 'src/dto/book/book.dto';
import { BookService } from 'src/service/book.service';
import { TSearch } from 'src/types/common.type';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(search: TSearch): Promise<import("../dto/response/book.dto").BookDto>;
    createBook(createBookDto: CreateBookDto): any;
}
