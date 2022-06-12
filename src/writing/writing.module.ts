import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { writingProviders } from './writing.providers';
import { WritingService } from './writing.service';
import { WritingController } from './writing.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [WritingController],
  providers: [...writingProviders, WritingService],
  exports: [WritingService],
})
export class WritingModule {}
