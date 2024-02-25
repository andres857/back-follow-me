import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { FloorService } from './floor.service';
import { CreateFloorDto } from './dto/floor.dto';
import { Public } from 'src/auth/constants';
import { response } from 'express';

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
  async addFloor(@Body() createFloorDto: CreateFloorDto) {
    try {
      const floor = await this.floorService.create(createFloorDto);
      return floor;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.floorService.remove(id);
  }
}
