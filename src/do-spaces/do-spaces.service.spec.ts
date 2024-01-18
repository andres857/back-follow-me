import { Test, TestingModule } from '@nestjs/testing';
import { DoSpacesService } from './do-spaces.service';

describe('DoSpacesService', () => {
  let service: DoSpacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoSpacesService],
    }).compile();

    service = module.get<DoSpacesService>(DoSpacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
