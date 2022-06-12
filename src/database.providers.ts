import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mariadb',
        // autoLoadEntities: true,
        host: config.get('DB_HOST'), //'localhost',
        port: +config.get<number>('DB_PORT'), //0,
        username: config.get('DB_USER'), //'root',
        password: config.get('DB_PASSWORD'), //'dufTlagltkfRk?',
        database: config.get('DB_NAME'), //'nestjs',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_ENV !== 'production',
      });

      return dataSource.initialize();
    },
  },
];
