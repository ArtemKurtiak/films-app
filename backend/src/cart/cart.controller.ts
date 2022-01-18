import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';

import { Film } from '../films/entities';
import { CartService } from './cart.service';
import { AddFilmDto, DeleteFilmDto } from './dto';
import { CheckFilmExistsGuard } from './guards';

@Controller('/api/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  async getCart(): Promise<Film[]> {
    return this.cartService.getCart();
  }

  @Post('/add')
  @UseGuards(CheckFilmExistsGuard)
  addFilmToCart(@Body() dto: AddFilmDto): Promise<Film[]> {
    return this.cartService.addFilmToCart(dto);
  }

  @Delete('/remove')
  deleteFilmFromCart(@Body() dto: DeleteFilmDto): Promise<Film[]> {
    return this.cartService.deleteFilmToCart(dto);
  }
}
