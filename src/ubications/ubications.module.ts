import { Module } from '@nestjs/common';
import { UbicationsController } from './ubications.controller';
import { UbicationsService } from './ubications.service';

@Module({
  controllers: [UbicationsController],
  providers: [UbicationsService]
})
export class UbicationsModule {}
