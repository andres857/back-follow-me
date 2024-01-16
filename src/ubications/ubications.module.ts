import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubication } from './entity/ubication.entity';
import { UbicationsController } from './ubications.controller';
import { UbicationsService } from './ubications.service';
import { TypeUbicationModule } from '../type-ubication/type-ubication.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ubication]), TypeUbicationModule],
  controllers: [UbicationsController],
  providers: [UbicationsService],
})
export class UbicationsModule {}
