import { Test, TestingModule } from '@nestjs/testing';
import { DetailPathwaysUbicationsController } from './detail_pathways_ubications.controller';

describe('DetailPathwaysUbicationsController', () => {
  let controller: DetailPathwaysUbicationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailPathwaysUbicationsController],
    }).compile();

    controller = module.get<DetailPathwaysUbicationsController>(DetailPathwaysUbicationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
