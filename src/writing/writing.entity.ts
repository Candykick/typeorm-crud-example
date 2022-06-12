import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('writing')
export class Writing extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'post_id' })
  @ApiProperty()
  writingId: number;

  @Column({ length: 300 })
  @ApiProperty()
  title: string;

  @Column({ length: 3000 })
  @ApiProperty()
  text: string;
}
