import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instruction } from './entity/instructions.entity';
import { CreateInstructionDto } from './dto/intructions.dto';

@Injectable()
export class InstructionsService {
  constructor(
    @InjectRepository(Instruction)
    private instructionRepository: Repository<Instruction>,
  ) {}

  findAll(): Promise<Instruction[]> {
    return this.instructionRepository.find();
  }

  findOne(id: number): Promise<any | null> {
    return this.instructionRepository.findOneBy({ id });
  }

  async create(data: CreateInstructionDto) {
    try {
      const instruction = this.instructionRepository.create(data as any);
      const saveInst = await this.instructionRepository.save(instruction);
      console.log(saveInst);

      return saveInst;
    } catch (error) {
      console.log(error);

      throw new Error(`Error al crear la instruccion: ${error.message}`);
    }
  }
}
