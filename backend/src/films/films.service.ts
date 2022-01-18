import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { Film } from './entities';
import { ApiService } from '../common/services';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private filmsRepository: Repository<Film>,
    private apiService: ApiService,
    private configService: ConfigService,
  ) {}

  async getFilms(searchTerm = ''): Promise<Film[]> {
    return this.filmsRepository
      .createQueryBuilder('film')
      .where('film.title LIKE :searchTerm', { searchTerm: `%${searchTerm}%` })
      .getMany();
  }

  async getFilmDetails(filmId: number): Promise<any> {
    const apiUrl = await this.configService.get('API_URL');

    const response: AxiosResponse = await this.apiService
      .getApiRequest(`${apiUrl}/3/movie/${filmId}`)
      .catch((err: AxiosError) => {
        return err.response;
      });

    return response.data;
  }
}
