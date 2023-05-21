import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'src/dto/book/book.dto';
import { BookDto } from 'src/dto/response/book.dto';
import { BookRepository } from 'src/repository/book.repository';
import { TSearch } from 'src/types/common.type';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks(search: TSearch): Promise<BookDto> {
    const books: any = await this.bookRepository.getAllBooks(search);
    return books;
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookDto> {
    const book: any = await this.bookRepository.createBook(createBookDto);
    return new BookDto(book);
  }
}
