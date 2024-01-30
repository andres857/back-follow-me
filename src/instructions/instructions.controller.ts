import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/intructions.dto';
// import { Response } from 'express';

@Controller('instructions')
export class InstructionsController {
  constructor(private instructionService: InstructionsService) {}

  @Get()
  async getAll() {
    const typeUbications = await this.instructionService.findAll();
    return typeUbications;
  }

  @Get('/:id')
  async getTypeUbicationById(@Param('id', ParseIntPipe) id: number) {
    const typeUbication = await this.instructionService.findOne(id);
    return typeUbication;
  }

  @Post()
  async create(@Body() instruction: CreateInstructionDto) {
    console.log('----Instruction controller----');
    console.log(instruction);
    console.log('----Instruction controller----');
    return this.instructionService.create(instruction);
  }
}
