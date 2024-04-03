import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/intructions.dto';
import { Public } from 'src/auth/constants';

@Public()
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
    return await this.instructionService.create(instruction);
  }

  // @Get('qr/:idUbication')
  // async getQrCode(@Param('idUbication', ParseIntPipe) idUbication: number) {
  //   console.log(idUbication);
  //   const qrUrl = await this.instructionService.QrCode(idUbication);
  //   return qrUrl;
  // }

  @Post('qr')
  async generateQrCode(@Body('url') url: any) {
    console.log(url);
    const qrCodeDataURL = await this.instructionService.generateQrCode(url);
    return `<img src="${qrCodeDataURL}" alt="QR Code" />`;
  }
}
