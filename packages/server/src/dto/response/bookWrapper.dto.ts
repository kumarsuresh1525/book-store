import { Book } from 'src/entity/book/book.entity';
import { BookDto } from './book.dto';

export class BookWrapperDto {
  books: BookDto[];

  constructor(books: Book[]) {
    this.books = books.map((book) => new BookDto(book));
  }
}
