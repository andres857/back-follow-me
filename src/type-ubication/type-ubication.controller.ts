import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TypeUbicationService } from './type-ubication.service';
import { CreateTypeUbicationDto } from './dto/typeUbication.dto';
import { Public } from 'src/auth/constants';

<<<<<<< HEAD
=======
@Public()
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
@Controller('type-ubications')
export class TypeUbicationController {
  constructor(private typeUbicationService: TypeUbicationService) {}

  @Get()
  async getAll() {
    const typeUbications = await this.typeUbicationService.findAll();
    return typeUbications;
  }

  @Get('/:id')
  async getTypeUbicationById(@Param('id', ParseIntPipe) id: number) {
    const typeUbication = await this.typeUbicationService.findOne(id);
    return typeUbication;
  }

  @Post()
  async create(@Body() createFloorDto: CreateTypeUbicationDto) {
    return this.typeUbicationService.create(createFloorDto);
  }
}
