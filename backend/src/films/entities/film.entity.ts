import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { Cart } from '../../cart/entities';

@Entity()
export class Film {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'boolean',
  })
  adult: boolean;

  @Column({
    type: 'varchar',
  })
  original_language: string;

  @Column({
    type: 'varchar',
  })
  @Index()
  title: string;

  @Column({
    type: 'varchar',
  })
  overview: string;

  @Column({
    type: 'float',
  })
  popularity: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  backdrop_path: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  poster_path: string;

  @Column({
    type: 'float',
  })
  vote_average: number;

  @Column({
    type: 'varchar',
  })
  release_date: string;

  @ManyToMany(() => Cart, (cart) => cart.films)
  carts: [];
}
