import { IsNumber } from 'class-validator';

export class AddFilmDto {
  @IsNumber()
  filmId: number;
}
