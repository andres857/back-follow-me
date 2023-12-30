import { Test, TestingModule } from '@nestjs/testing';
import { UbicationsController } from './ubications.controller';

describe('UbicationsController', () => {
  let controller: UbicationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UbicationsController],
    }).compile();

    controller = module.get<UbicationsController>(UbicationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
