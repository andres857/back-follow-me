import { Test, TestingModule } from '@nestjs/testing';
import { TypeUbicationService } from './type-ubication.service';

describe('TypeUbicationService', () => {
  let service: TypeUbicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeUbicationService],
    }).compile();

    service = module.get<TypeUbicationService>(TypeUbicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
