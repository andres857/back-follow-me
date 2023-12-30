import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}

  @Get('/:id')
  getClientById(@Param('id') id: string) {
    return `id client ${id}`;
  }

  @Post()
  async create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }
}
