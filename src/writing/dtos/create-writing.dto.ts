import { PickType } from '@nestjs/swagger';
import { Writing } from '../writing.entity';

// dto for creating writing
export class CreateWritingDto extends PickType(Writing, ['title', 'text']) {}
