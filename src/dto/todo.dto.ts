import { MaxLength, MinLength } from 'class-validator';

export class TodoDto {
  @MinLength(3)
  @MaxLength(500)
  todo: string;
}
