import { Module, OnModuleInit } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Repository } from 'typeorm';

import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { Film } from './entities';
import { CommonModule } from '../common/common.module';
import { ApiService } from '../common/services';

@Module({
  imports: [TypeOrmModule.forFeature([Film]), CommonModule],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule implements OnModuleInit {
  constructor(
    @InjectRepository(Film) private filmsRepository: Repository<Film>,
    private configService: ConfigService,
    private apiService: ApiService,
  ) {}

  async onModuleInit(): Promise<void> {
    const films = await this.filmsRepository.find({});

    // to write films from api to database
    if (!films.length) {
      const apiUrl = this.configService.get('API_URL');

      const response = await this.apiService.getApiRequest(
        `${apiUrl}/3/discover/movie`,
        '&sort_by=release_date.desc',
      );

      await this.filmsRepository
        .createQueryBuilder()
        .insert()
        .values(response.data.results)
        .execute();
    }
  }
}
