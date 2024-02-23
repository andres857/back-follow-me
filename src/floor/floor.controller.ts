import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { FloorService } from './floor.service';
import { CreateFloorDto } from './dto/floor.dto';
import { Public } from 'src/auth/constants';

@Public()
@Controller('floors')
export class FloorController {
  constructor(private floorService: FloorService) {}

  @Get()
  async getAll() {
    const floors = await this.floorService.findAll();
    console.log(floors);
    return floors;
  }

  @Get('/:id')
  async getFloorByIdUbication(@Param('id', ParseIntPipe) id: number) {
    const floor = await this.floorService.findOne(id);
    console.log(floor);
    return floor;
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createFloorDto: CreateFloorDto) {
    return this.floorService.create(createFloorDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.floorService.remove(id);
  }
}
