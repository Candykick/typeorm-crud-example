import { Module } from '@nestjs/common';
import { WritingModule } from './writing/writing.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), WritingModule],
  //controllers: [AppController],
  //providers: [],
})
export class AppModule {}
