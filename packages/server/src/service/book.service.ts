import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'src/dto/book/book.dto';
import { BookDto } from 'src/dto/response/book.dto';
import { BookWrapperDto } from 'src/dto/response/bookWrapper.dto';
import { BookRepository } from 'src/repository/book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks(search): Promise<BookDto[]> {
    const books = await this.bookRepository.getAllBooks(search);
    const booksWrapper = new BookWrapperDto(books);
    return booksWrapper.books;
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookDto> {
    const book = await this.bookRepository.createBook(createBookDto);
    return new BookDto(book);
  }
}
