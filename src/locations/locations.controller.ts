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
import { Public } from 'src/auth/constants';

@Public()
@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}

  @Get()
  async getAll() {
    return await this.locationService.findAll();
  }

  @Get('/:id')
  async getLocationById(@Param('id', ParseIntPipe) id: number) {
    return await this.locationService.findOne(id);
  }

  @Post()
  async create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }
}
