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
import { SpacesService } from '../do-spaces/do-spaces.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ubications')
export class UbicationsController {
  constructor(
    private ubicationService: UbicationsService,
    private spacesService: SpacesService,
  ) {}

  @Get()
  async getbyId(@Query('type') type: string) {
    const ubication = await this.ubicationService.getUbicationsByType(type);
    return ubication;
  }

  @Post()
  async create(@Body() createLocationDto: CreateUbicationDto) {
    return this.ubicationService.create(createLocationDto);
  }

  @Post('/new/upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: any, @Req() req) {
    console.log(file);
    
    // const buffer = file.buffer;
    // const filename = file.originalname;

    const imageUrl = await this.spacesService.uploadFile(file);
    console.log(imageUrl);
    
    return { imageUrl };
  }
}
