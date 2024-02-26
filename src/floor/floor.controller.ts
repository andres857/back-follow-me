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
import { FloorService } from './floor.service';
import { CreateFloorDto, UpdateFloorDto } from './dto/floor.dto';
import { Public } from 'src/auth/constants';

@Public()
@Controller('floors')
export class FloorController {
  constructor(private floorService: FloorService) {}

  @Get()
  async getAll() {
    return await this.floorService.findAll();
  }

  @Get('/:id')
  async getFloorByIdUbication(@Param('id', ParseIntPipe) id: number) {
    return await this.floorService.findOne(id);
  }

  @Post()
  async addFloor(@Body() createFloorDto: CreateFloorDto) {
    return await this.floorService.create(createFloorDto).catch((error) => {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    });
  }

  @Put('/:id')
  async updateFields(
    @Body() data: UpdateFloorDto, // Utilizar ValidationPipe con skipMissingProperties
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.floorService.update(id, data).catch((error) => {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    });
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.floorService.remove(id).catch((error) => {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    });
  }
}
