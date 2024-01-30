import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instruction } from './entity/instructions.entity';
import { InstructionsService } from './instructions.service';
import { InstructionsController } from './instructions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Instruction])],
  providers: [InstructionsService],
  controllers: [InstructionsController],
  exports: [InstructionsService],
})
export class InstructionsModule {}
