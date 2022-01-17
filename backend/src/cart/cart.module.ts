import { Module, OnModuleInit } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

import { Cart } from './entities';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Repository } from 'typeorm';
import { Film } from '../films/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Film])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule implements OnModuleInit {
  constructor(
    @InjectRepository(Cart) private cartsRepository: Repository<Cart>,
  ) {}

  async onModuleInit(): Promise<void> {
    const cart = await this.cartsRepository.findOne();

    if (!cart) {
      await this.cartsRepository.insert({});
    }
  }
}
