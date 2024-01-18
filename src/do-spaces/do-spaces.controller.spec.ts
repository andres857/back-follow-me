import { Test, TestingModule } from '@nestjs/testing';
import { DoSpacesController } from './do-spaces.controller';

describe('DoSpacesController', () => {
  let controller: DoSpacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoSpacesController],
    }).compile();

    controller = module.get<DoSpacesController>(DoSpacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
