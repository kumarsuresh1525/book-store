import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { BaseSchema } from '../base.entity';

export type BookDocument = Book & Document;

@Schema({ collection: 'books', timestamps: true })
export class Book extends BaseSchema {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  author: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String })
  imgUrl: string;

  constructor(partial: Partial<Book> = {}) {
    super();
    Object.assign(this, partial);
  }
}

export const BookSchema = SchemaFactory.createForClass(Book);
