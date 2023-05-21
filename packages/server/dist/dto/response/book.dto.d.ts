import { Book } from 'src/entity/book.entity';
export declare class BookDto {
    title: string;
    author: string;
    id: string;
    price: number;
    rating: number;
    imgUrl: string;
    constructor(book: Book);
}
