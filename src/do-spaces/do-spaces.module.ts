import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SpacesService } from './do-spaces.service';
import { DoSpacesController } from './do-spaces.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [SpacesService],
  controllers: [DoSpacesController],
  exports: [SpacesService],
})
export class DoSpacesModule {}
