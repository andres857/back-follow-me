import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeUbication } from './entity/typeUbication.entity';
import { TypeUbicationService } from './type-ubication.service';
import { TypeUbicationController } from './type-ubication.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TypeUbication])],
  providers: [TypeUbicationService],
  controllers: [TypeUbicationController],
  exports: [TypeUbicationService],
})
export class TypeUbicationModule {}
