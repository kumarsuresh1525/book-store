import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateBookDto } from 'src/dto/book/book.dto';

import { Book, BookDocument } from 'src/entity/book.entity';

@Injectable()
export class BookRepository {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>,
  ) {}

  async getAllBooks(filter: any): Promise<Book[]> {
    return await this.bookModel.find({
      ...(filter.title && { title: { $regex: filter.title, $options: 'i' } }),
      ...(filter.author && {
        author: { $regex: filter.author, $options: 'i' },
      }),
      ...(filter.rating && {
        rating: { $gte: filter.rating },
      }),
      ...(filter.price && {
        price: { $gte: filter.price },
      }),
    });
  }

  async createBook(createBook: CreateBookDto): Promise<Book> {
    return await this.bookModel.create(createBook);
  }
}
