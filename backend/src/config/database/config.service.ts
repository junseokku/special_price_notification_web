import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class MariadbConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mariadb',
      username: this.configService.get<string>('root'),
      password: this.configService.get<string>('root'),
      port: +this.configService.get<number>('3306'),
      host: this.configService.get<string>('root'),
      database: this.configService.get<string>('mariadb'),
      entities: ['dist/**/**/*.entity{.ts,.js}'],
      // autoLoadEntities: true,
    };
  }
}
