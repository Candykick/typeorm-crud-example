import { PickType } from '@nestjs/swagger';
import { Writing } from '../writing.entity';

// dto for read writing list
export class ReadWritingListItemDto extends PickType(Writing, [
  'writingId',
  'title',
]) {}
