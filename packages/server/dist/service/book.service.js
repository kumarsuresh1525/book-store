"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const book_dto_1 = require("../dto/response/book.dto");
const book_repository_1 = require("../repository/book.repository");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getAllBooks(search) {
        const books = await this.bookRepository.getAllBooks(search);
        return books;
    }
    async createBook(createBookDto) {
        const book = await this.bookRepository.createBook(createBookDto);
        return new book_dto_1.BookDto(book);
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [book_repository_1.BookRepository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map