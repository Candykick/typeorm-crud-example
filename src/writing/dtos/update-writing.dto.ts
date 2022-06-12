import { PickType } from '@nestjs/swagger';
import { Writing } from '../writing.entity';

// dto for updating writing
export class UpdateWritingDto extends PickType(Writing, [
  'writingId',
  'title',
  'text',
]) {}
