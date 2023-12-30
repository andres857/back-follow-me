import { Test, TestingModule } from '@nestjs/testing';
import { TypeUbicationController } from './type-ubication.controller';

describe('TypeUbicationController', () => {
  let controller: TypeUbicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeUbicationController],
    }).compile();

    controller = module.get<TypeUbicationController>(TypeUbicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
