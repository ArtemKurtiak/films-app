import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Film } from '../../films/entities';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Film, (film) => film.carts, { cascade: true, eager: true })
  @JoinTable({
    joinColumn: {
      referencedColumnName: 'id',
    },
    name: 'film_cart',
  })
  films: Film[];
}
