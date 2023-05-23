import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateBookDto } from '../../dto/book/book.dto';

import { Book, BookDocument } from '../../entity/book/book.entity';

@Injectable()
export class BookRepository {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>,
  ) {}

  async getAllBooks(filter): Promise<Book[]> {
    return await this.bookModel.find({
      ...(filter.search && {
        $or: [
          {
            author: { $regex: filter.search, $options: 'i' },
          },
          {
            title: { $regex: filter.search, $options: 'i' },
          },
        ],
      }),
      ...(filter.rating && {
        rating: { $gte: filter.rating },
      }),
      ...(filter.price && {
        price: { $gte: filter.minPrice, $lte: filter.maxPrice },
      }),
    });
  }

  async createBook(createBook: CreateBookDto): Promise<Book> {
    return await this.bookModel.create(createBook);
  }
}
