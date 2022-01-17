import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApiService } from './services';

@Module({
  imports: [ConfigModule],
  providers: [ApiService],
  exports: [ApiService],
})
export class CommonModule {}
