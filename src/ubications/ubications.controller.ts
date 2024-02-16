import {
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
<<<<<<< HEAD
=======
import { Public } from 'src/auth/constants';
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34

@Public()
@Controller('ubications')
export class UbicationsController {
  constructor(private ubicationService: UbicationsService) {}

  @Get()
  async getbyId(@Query('type') type: string) {
    const ubication = await this.ubicationService.getUbicationsByType(type);
    return ubication;
  }

  @Post('/new/upload')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: any,
    @Req() req,
    @Res() response: Response,
  ) {
    console.log('-----ubication controller-------');
    console.log(req.body);
    console.log('-----ubication controller-------');

    const payload = {
      nameUbication: req.body.nameUbication,
      typeUbication: JSON.parse(req.body.typeUbication).id,
      location: JSON.parse(req.body.location).id,
      floor: JSON.parse(req.body.floor).id,
      descriptionUbication: req.body.descriptionUbication,
      direction: req.body.direction,
    };

    const responseData = {
      name: req.body.nameUbication,
      typeUbication: JSON.parse(req.body.typeUbication).name,
      location: JSON.parse(req.body.location).name,
      floor: JSON.parse(req.body.floor).name,
      descriptionUbication: req.body.descriptionUbication,
    };

    try {
      await this.ubicationService.createUbication(payload, file);
      response.status(HttpStatus.CREATED).json({
        statusCode: 200,
        message: 'Ubicacion creada exitosamente',
        data: responseData,
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
