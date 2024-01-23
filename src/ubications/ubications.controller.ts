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
    const payload = {
      ...req.body,
    };
    console.log('-----C------');
    console.log(payload);
    console.log('---C--------');
    return this.ubicationService.createUbication(payload, file);

    // const rta = await this.ubicationService.createUbication(
    //   ubicationData,
    //   file,
    // );
    // return { rta };
  }
}
