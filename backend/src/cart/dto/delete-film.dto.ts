import { IsNumber } from 'class-validator';

export class DeleteFilmDto {
  @IsNumber()
  filmId: number;
}
