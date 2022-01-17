import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { FilmsService } from './films.service';
import { Film } from './entities';

@Controller('/api/films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Get()
  getFilms(): Promise<Film[]> {
    return this.filmsService.getFilms();
  }

  @Get(':film_id')
  getFilmDetails(
    @Param('film_id', ParseIntPipe) filmId: number,
  ): Promise<Film> {
    return this.filmsService.getFilmDetails(filmId);
  }
}
