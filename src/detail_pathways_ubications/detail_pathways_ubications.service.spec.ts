import { Test, TestingModule } from '@nestjs/testing';
import { DetailPathwaysUbicationsService } from './detail_pathways_ubications.service';

describe('DetailPathwaysUbicationsService', () => {
  let service: DetailPathwaysUbicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailPathwaysUbicationsService],
    }).compile();

    service = module.get<DetailPathwaysUbicationsService>(DetailPathwaysUbicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
