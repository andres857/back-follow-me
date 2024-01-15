import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UbicationsService } from './ubications.service';
import { CreateUbicationDto } from './dto/ubication.dto';

@Controller('ubications')
export class UbicationsController {
  constructor(private ubicationService: UbicationsService) {}

  @Get()
  async getAll() {
    const ubications = await this.ubicationService.findAll();
    console.log(ubications);

    return ubications;
  }

  @Get('/:id')
  async getbyId(@Param('id', ParseIntPipe) id: number) {
    const ubication = await this.ubicationService.findOne(id);
    console.log(ubication);

    return ubication;
  }

  @Post()
  async create(@Body() createLocationDto: CreateUbicationDto) {
    return this.ubicationService.create(createLocationDto);
  }
}
