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
<<<<<<< HEAD
import { Public } from '../auth/constants';

// @Public()
=======
import { Public } from 'src/auth/constants';

@Public()
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
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
