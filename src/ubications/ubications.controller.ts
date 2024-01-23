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
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ubications')
export class UbicationsController {
  constructor(private ubicationService: UbicationsService) {}

  @Get()
  async getbyId(@Query('type') type: string) {
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

    const newUbication = await this.ubicationService.createUbication(payload, file);
    console.log('---------------');
    console.log(newUbication);
    console.log('---------------');

    return newUbication;
  }
}
