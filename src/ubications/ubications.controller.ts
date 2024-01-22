import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  Req,
} from '@nestjs/common';
import { UbicationsService } from './ubications.service';
import { CreateUbicationDto } from './dto/ubication.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ubications')
export class UbicationsController {
  constructor(private ubicationService: UbicationsService) {}

  @Get()
  async getbyId(@Query('type') type: string) {
    console.log(type);
    const ubication = await this.ubicationService.getUbicationsByType(type);
    return ubication;
  }

  @Post()
  async create(@Body() createLocationDto: any) {
    return this.ubicationService.create(createLocationDto);
  }

  @Post('/new/upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: any, @Req() req) {
    const myreq = req.body;
    const payload = {
      name: myreq.nameUbication,
      idTypeUbication: parseInt(myreq.typeUbication, 10),
      Location: parseInt(myreq.location, 10),
      idFloor: parseInt(myreq.floor, 10),
      imageUrl: 'http',
    };
    // const payload = { nameUbication, typeUbication, location, floor } = myreq;
    console.log(myreq);
    return this.ubicationService.create(payload);

    // const rta = await this.ubicationService.createUbication(
    //   ubicationData,
    //   file,
    // );
    // return { rta };
  }
}
