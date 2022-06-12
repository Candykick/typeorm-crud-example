import { DataSource } from 'typeorm';
import { Writing } from './writing.entity';

export const writingProviders = [
  {
    provide: 'WRITING_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Writing),
    inject: ['DATA_SOURCE'],
  },
];
