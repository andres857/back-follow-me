import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubication } from './entity/ubication.entity';
import { UbicationsController } from './ubications.controller';
import { UbicationsService } from './ubications.service';
import { TypeUbicationModule } from '../type-ubication/type-ubication.module';
import { DoSpacesModule } from '../do-spaces/do-spaces.module';
import { InstructionsModule } from '../instructions/instructions.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Ubication]),
    TypeUbicationModule,
    DoSpacesModule,
    InstructionsModule,
  ],
  controllers: [UbicationsController],
  providers: [UbicationsService],
})
export class UbicationsModule {}
