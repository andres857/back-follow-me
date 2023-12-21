import { Module } from '@nestjs/common';
import { DetailPathwaysUbicationsController } from './detail_pathways_ubications.controller';
import { DetailPathwaysUbicationsService } from './detail_pathways_ubications.service';

@Module({
  controllers: [DetailPathwaysUbicationsController],
  providers: [DetailPathwaysUbicationsService]
})
export class DetailPathwaysUbicationsModule {}
