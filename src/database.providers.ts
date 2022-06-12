import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mariadb',
        // autoLoadEntities: true,
        host: 'cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com\t',
        port: 3306,
        username: 'rq16yjqva15u2u80',
        password: 'rzqm45gukjoo7au7',
        database: 'pwpowbo4bpc4g7r3',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_ENV !== 'production',
      });

      return dataSource.initialize();
    },
  },
];
