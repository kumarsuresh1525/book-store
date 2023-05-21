"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDto = void 0;
class BookDto {
    constructor(book) {
        this.title = book.title;
        this.id = book._id;
        this.imgUrl = book.imgUrl;
        this.author = book.author;
        this.price = book.price;
        this.rating = book.rating;
    }
}
exports.BookDto = BookDto;
//# sourceMappingURL=book.dto.js.map