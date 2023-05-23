import { Book } from 'src/entity/book/book.entity';

export class BookDto {
  title: string;
  author: string;
  id: string;
  price: number;
  rating: number;
  imgUrl: string;

  constructor(book: Book) {
    this.title = book.title;
    this.id = book._id;
    this.imgUrl = book.imgUrl;
    this.author = book.author;
    this.price = book.price;
    this.rating = book.rating;
  }
}
