import { Module } from '@nestjs/common';
import { WritingModule } from './writing/writing.module';

@Module({
  imports: [WritingModule],
  //controllers: [AppController],
  //providers: [],
})
export class AppModule {}
