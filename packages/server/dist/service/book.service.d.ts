import { CreateBookDto } from 'src/dto/book/book.dto';
import { BookDto } from 'src/dto/response/book.dto';
import { BookRepository } from 'src/repository/book.repository';
import { TSearch } from 'src/types/common.type';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    getAllBooks(search: TSearch): Promise<BookDto>;
    createBook(createBookDto: CreateBookDto): Promise<BookDto>;
}
