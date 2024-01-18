import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { FloorService } from './floor.service';
import { CreateFloorDto } from './dto/floor.dto';

@Controller('floors')
export class FloorController {
  constructor(private floorService: FloorService) {}

  @Get()
  async getAll() {
    const floors = await this.floorService.findAll();
    return floors;
  }

  @Get('/:id')
  async getFloorByIdUbication(@Param('id', ParseIntPipe) id: number) {
    const floor = await this.floorService.findOne(id);
    return floor;
  }

  @Post()
  async create(@Body() createFloorDto: CreateFloorDto) {
    return this.floorService.create(createFloorDto);
  }
}
