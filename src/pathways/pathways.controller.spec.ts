import { Test, TestingModule } from '@nestjs/testing';
import { PathwaysController } from './pathways.controller';

describe('PathwaysController', () => {
  let controller: PathwaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PathwaysController],
    }).compile();

    controller = module.get<PathwaysController>(PathwaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
