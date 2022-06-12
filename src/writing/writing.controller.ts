import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WritingService } from './writing.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReadWritingListItemDto } from './dtos/read-writing-list-item.dto';
import { Writing } from './writing.entity';
import { CreateWritingDto } from './dtos/create-writing.dto';

@Controller()
@ApiTags('API')
export class WritingController {
  @Post('/ping')
  @ApiOperation({ summary: 'ping-pong' })
  async writePost(): Promise<string> {
    return 'pong';
  }
}
