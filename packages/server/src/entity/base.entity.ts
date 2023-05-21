import { IsOptional } from 'class-validator';
import { Exclude, Expose, Transform, classToPlain } from 'class-transformer';

export abstract class BaseSchema {
  @Expose({ name: 'id' })
  @Transform((document) => document.value.toString())
  @IsOptional()
  _id: string;

  @Exclude()
  @IsOptional()
  _v: any;

  toJSON() {
    return classToPlain(this);
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}
