import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubication } from './entity/ubication.entity';
import { UbicationsController } from './ubications.controller';
import { UbicationsService } from './ubications.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ubication])],
  controllers: [UbicationsController],
  providers: [UbicationsService],
})
export class UbicationsModule {}
