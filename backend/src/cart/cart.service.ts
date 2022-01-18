import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Film } from '../films/entities';
import { Cart } from './entities';
import { Repository } from 'typeorm';
import { AddFilmDto, DeleteFilmDto } from './dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private cartsRepository: Repository<Cart>,
    @InjectRepository(Film) private filmsRepository: Repository<Film>,
  ) {}

  async getCart(): Promise<Film[]> {
    // findOne because we don't have any user or line that.
    const cart = await this.cartsRepository.findOne();

    return cart.films;
  }

  async addFilmToCart(dto: AddFilmDto): Promise<Film[]> {
    const film = await this.filmsRepository.findOne({
      where: {
        id: dto.filmId,
      },
    });

    const cart = await this.cartsRepository.findOne();

    cart.films.push(film);

    await this.cartsRepository.save(cart);

    return cart.films;
  }

  async deleteFilmToCart(dto: DeleteFilmDto): Promise<Film[]> {
    const cart = await this.cartsRepository.findOne();

    const filmIndex = cart.films.findIndex((item) => item.id === dto.filmId);

    delete cart.films[filmIndex];

    await this.cartsRepository.save(cart);

    return cart.films;
  }
}
