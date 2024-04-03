import * as qrcode from 'qrcode';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instruction } from './entity/instructions.entity';
import { CreateInstructionDto } from './dto/intructions.dto';
import { SpacesService } from '../do-spaces/do-spaces.service';

@Injectable()
export class InstructionsService {
  constructor(
    @InjectRepository(Instruction)
    private instructionRepository: Repository<Instruction>,
    private spacesService: SpacesService,
  ) {}

  // return url of QR
  async generateQrCode(data: string): Promise<string> {
    try {
      const options = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        quality: 1,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
        width: 500,
        height: 500,
      };

      const qrCodeBuffer = await qrcode.toBuffer(data, options);
      const uploadResult = await this.spacesService.uploadQR(qrCodeBuffer);
      return uploadResult.Location;
    } catch (error) {
      console.log('Failed to generate QR code.', error);
    }
  }

  // async QrCode(id: number): Promise<any |  null> {
  //   const ubication = this.findOne(id);
  //   console.log(ubication);

  // }

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
