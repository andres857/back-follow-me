import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';
import { Public } from 'src/auth/constants';

@Public()
@Controller('locations')
export class LocationsController {
  floorService: any;
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

  @Put('/:id')
  async updateFields(
    @Body() data: UpdateLocationDto, // Utilizar ValidationPipe con skipMissingProperties
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.locationService.update(id, data).catch((error) => {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    });
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.locationService.remove(id).catch((error) => {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    });
  }
}
