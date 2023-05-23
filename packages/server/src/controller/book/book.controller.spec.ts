import { BookService } from '../../service/book/book.service';
import { BookController } from './book.controller';
import { BookRepository } from '../../repository/book/book.repository';
import { BookDocument } from '../../entity/book/book.entity';
import { Model } from 'mongoose';
import { BookDto } from '../../dto/response/book.dto';
import { CreateBookDto } from '../../dto/book/book.dto';

describe('BookController', () => {
  let bookController: BookController;
  let bookService: BookService;
  let bookRepository: BookRepository;
  let bookDocument: Model<BookDocument>;

  beforeEach(() => {
    bookRepository = new BookRepository(bookDocument);
    bookService = new BookService(bookRepository);
    bookController = new BookController(bookService);
  });

  describe('getAllBooks', () => {
    it('should return an array of books', async () => {
      const result: BookDto[] = [
        {
          id: '1',
          title: 'test1',
          author: 'author',
          imgUrl: '',
          rating: 4,
          price: 200,
        },
      ];
      jest
        .spyOn(bookService, 'getAllBooks')
        .mockImplementation(async () => result);

      expect(await bookController.getAllBooks()).toBe(result);
    });

    it('should return an array of books with search keyword', async () => {
      const result: BookDto[] = [
        {
          id: '1',
          title: 'test1',
          author: 'lee',
          imgUrl: '',
          rating: 4,
          price: 200,
        },
      ];
      jest
        .spyOn(bookService, 'getAllBooks')
        .mockImplementation(async () => result);

      expect(await bookController.getAllBooks('?search=lee')).toBe(result);
    });
  });

  describe('createBook', () => {
    it('should create and return book object', async () => {
      const result = {
        id: '1',
        title: 'test1',
        author: 'author',
        imgUrl: '',
        rating: 4,
        price: 200,
      };
      const body = new CreateBookDto();
      jest
        .spyOn(bookService, 'createBook')
        .mockImplementation(async () => result);

      expect(await bookController.createBook(body)).toBe(result);
    });
  });
});
