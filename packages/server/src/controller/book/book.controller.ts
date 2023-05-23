import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBookDto } from '../../dto/book/book.dto';
import { BookDto } from '../../dto/response/book.dto';
import { BookService } from '../../service/book/book.service';

@Controller('books')
@ApiTags('Books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(@Query() search?: any) {
    return this.bookService.getAllBooks(search);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<BookDto> {
    return this.bookService.createBook(createBookDto);
  }
}
