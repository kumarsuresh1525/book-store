import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBookDto } from 'src/dto/book/book.dto';
import { BookDto } from 'src/dto/response/book.dto';
import { BookService } from 'src/service/book.service';

@Controller('books')
@ApiTags('Books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(@Query() search) {
    return this.bookService.getAllBooks(search);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<BookDto> {
    return this.bookService.createBook(createBookDto);
  }
}
