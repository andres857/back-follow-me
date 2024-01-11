import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async create(@Body() createLocationDto: CreateUbicationDto) {
    return this.ubicationService.create(createLocationDto);
  }
}
