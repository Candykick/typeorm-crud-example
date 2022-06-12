import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Writing } from './writing.entity';
import { ReadWritingListItemDto } from './dtos/read-writing-list-item.dto';
import { CreateWritingDto } from './dtos/create-writing.dto';

@Injectable()
export class WritingService {
  constructor(
    @Inject('WRITING_REPOSITORY')
    private repository: Repository<Writing>,
  ) {}

  // Create : writing 하나 생성
  async writePost(createPostDto: CreateWritingDto): Promise<Writing> {
    const createdPost = await this.repository.create({
      title: createPostDto.title,
      text: createPostDto.text,
    });
    const newPost = await this.repository.save(createdPost);
    return await this.readOnePost(newPost.writingId);
  }

  // Read : writing 하나 읽기
  async readOnePost(writingId: number): Promise<Writing> {
    return await this.repository.findOne({ where: { writingId } });
  }

  // Read : writing 리스트 읽기
  async readPostList(): Promise<ReadWritingListItemDto[]> {
    const originList = await this.repository.find();

    const resultList = [];
    originList.map((entity) => {
      const resultItem = new ReadWritingListItemDto();

      resultItem.writingId = entity.writingId;
      resultItem.title = entity.title;

      resultList.push(resultItem);
    });

    return resultList;
  }

  // Update : writing 업데이트
  async updatePost(
    writingId: number,
    updateContents: CreateWritingDto,
  ): Promise<boolean> {
    const newPost = new Writing();
    newPost.writingId = writingId;
    newPost.title = updateContents.title;
    newPost.text = updateContents.text;

    await this.repository.update(newPost.writingId, newPost);
    return true;
  }

  // Delete : writing 삭제
  async deletePost(writingId: number): Promise<boolean> {
    await this.repository.delete({ writingId: writingId });
    return true;
  }
}
