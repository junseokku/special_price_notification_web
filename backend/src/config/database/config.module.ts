import { Module } from '@nestjs/common';
import { MariadbConfigService } from './config.service';

@Module({
  providers: [MariadbConfigService],
})
export class MariadbConfigModule {}
