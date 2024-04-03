import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instruction } from './entity/instructions.entity';
import { InstructionsService } from './instructions.service';
import { InstructionsController } from './instructions.controller';
import { DoSpacesModule } from '../do-spaces/do-spaces.module';

@Module({
  imports: [TypeOrmModule.forFeature([Instruction]), DoSpacesModule],
  providers: [InstructionsService],
  controllers: [InstructionsController],
  exports: [InstructionsService],
})
export class InstructionsModule {}
