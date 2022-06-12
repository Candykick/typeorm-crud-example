import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { writingProviders } from './writing.providers';
import { WritingService } from './writing.service';
import { WritingController } from './writing.controller';

@Module({
  controllers: [WritingController],
})
export class WritingModule {}
