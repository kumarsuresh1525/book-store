import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  imgUrl: string;

  @IsNotEmpty()
  rating: string;
}
