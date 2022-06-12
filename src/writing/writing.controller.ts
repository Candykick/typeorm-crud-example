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

@Controller('post')
@ApiTags('POST API')
export class WritingController {
  constructor(private readonly service: WritingService) {}

  // Create
  @Post('')
  @ApiOperation({ summary: '새 writing 하나 생성' })
  @ApiCreatedResponse({ type: Writing })
  async writePost(@Body() body: CreateWritingDto): Promise<Writing> {
    return await this.service.writePost(body);
  }

  // Read: writing 하나
  @Get('/:postId')
  @ApiOperation({ summary: 'writing 하나를 id로 찾아서 출력함' })
  @ApiCreatedResponse({ type: Writing })
  async readOnePost(@Param('postId') writingId: number): Promise<Writing> {
    return await this.service.readOnePost(writingId);
  }

  // Read: writing 제목 리스트
  @Get('')
  @ApiOperation({ summary: 'writing 제목 리스트를 출력함' })
  @ApiCreatedResponse({ type: ReadWritingListItemDto, isArray: true })
  async readPostList(): Promise<ReadWritingListItemDto[]> {
    return await this.service.readPostList();
  }

  // Update
  @Patch('/:postId')
  @ApiOperation({ summary: 'writing 하나의 내용을 새로 업데이트함' })
  @ApiCreatedResponse({ type: Boolean })
  async updatePost(
    @Param('postId') writingId: number,
    @Body() body: CreateWritingDto,
  ): Promise<boolean> {
    return await this.service.updatePost(writingId, body);
  }

  // Delete
  @Delete('/:postId')
  @ApiOperation({ summary: 'writing 하나 삭제' })
  @ApiCreatedResponse({ type: Boolean })
  async deletePost(@Param('postId') writingId: number): Promise<boolean> {
    return await this.service.deletePost(writingId);
  }
}
