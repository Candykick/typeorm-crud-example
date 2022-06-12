import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mariadb',
        // autoLoadEntities: true,
        host: 'localhost', //configService.get('DB_HOST'),
        port: 0, //+configService.get<number>('DB_PORT'),
        username: 'root', //configService.get('DB_USER'),
        password: 'dufTlagltkfRk?', //configService.get('DB_PASSWORD'),
        database: 'nestjs', //configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_ENV !== 'production',
      });

      return dataSource.initialize();
    },
  },
];
