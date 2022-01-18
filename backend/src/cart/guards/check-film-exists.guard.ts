import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '../entities';
import { Repository } from 'typeorm';
import { AddFilmDto } from '../dto';

@Injectable()
export class CheckFilmExistsGuard implements CanActivate {
  constructor(
    @InjectRepository(Cart) private cartsRepository: Repository<Cart>,
  ) {}

  async canActivate(context: ExecutionContext) {
    const { body }: { body: AddFilmDto } = context.switchToHttp().getRequest();

    // only one cart exists so by getOne because we don't have users
    const cart = await this.cartsRepository
      .createQueryBuilder('cart')
      .leftJoinAndSelect('cart.films', 'chat_films')
      .where('chat_films.id IN (:...films)', { films: [body.filmId] })
      .getOne();

    return !Boolean(cart);
  }
}
