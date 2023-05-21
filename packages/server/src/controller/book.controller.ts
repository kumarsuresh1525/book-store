import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBookDto } from 'src/dto/book/book.dto';
import { BookService } from 'src/service/book.service';
import { TSearch } from 'src/types/common.type';

@Controller('books')
@ApiTags('Books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(@Query() search: TSearch) {
    return this.bookService.getAllBooks(search);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): any {
    return this.bookService.createBook(createBookDto);
  }
}
