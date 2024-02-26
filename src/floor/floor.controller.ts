import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
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

  @Patch('/:id')
  async updateFields(
    @Body('name') name: string, // Utilizar ValidationPipe con skipMissingProperties
    @Param('id', ParseIntPipe) id: number,
  ) {
    const updatedFloorDto = new UpdateFloorDto();
    updatedFloorDto.id = id;

    // Solo asignar la propiedad si está presente en el cuerpo de la solicitud
    updatedFloorDto.name = name;
    return this.floorService.update(updatedFloorDto).catch((error) => {
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
