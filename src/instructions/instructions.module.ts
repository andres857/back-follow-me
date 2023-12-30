import { Module } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { InstructionsController } from './instructions.controller';

@Module({
  providers: [InstructionsService],
  controllers: [InstructionsController]
})
export class InstructionsModule {}
