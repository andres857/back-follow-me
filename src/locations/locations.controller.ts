import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/location.dto';
import { Public } from '../auth/constants';

// @Public()
@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}

  @Get()
  async getAll() {
    const locations = await this.locationService.findAll();
    return locations;
  }

  @Get('/:id')
  async getLocationById(@Param('id', ParseIntPipe) id: number) {
    const location = await this.locationService.findOne(id);
    return location;
  }

  @Post()
  async create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }
}
