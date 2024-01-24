import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  Req,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { UbicationsService } from './ubications.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('ubications')
export class UbicationsController {
  constructor(private ubicationService: UbicationsService) {}

  @Get()
  async getbyId(@Query('type') type: string) {
    const ubication = await this.ubicationService.getUbicationsByType(type);
    return ubication;
  }

  // @Post()
  // async create(@Body() createLocationDto: any) {
  //   return this.ubicationService.create(createLocationDto);
  // }

  @Post('/new/upload')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: any,
    @Req() req,
    @Res() response: Response,
  ) {
    const payload = {
      ...req.body,
    };
    try {
      const newUbication = await this.ubicationService.createUbication(
        payload,
        file,
      );
      console.log(newUbication);

      response.status(HttpStatus.CREATED).json({
        statusCode: 200,
        message: 'Ubicacion creada exitosamente',
        data: newUbication,
        error: '',
      });
    } catch (error) {
      response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        statusCode: 422,
        message: 'Error al crear la ubicacion',
      });
    }
  }
}
