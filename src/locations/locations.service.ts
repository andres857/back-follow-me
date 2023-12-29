import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entity/location.entity';
import { CreateLocationDto } from './dto/location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  findOne(id: number): Promise<Location | null> {
    return this.locationRepository.findOneBy({ id });
  }

  async create(createClientDto: CreateLocationDto): Promise<Location> {
    const client = this.locationRepository.create(createClientDto);
    return this.locationRepository.save(client);
  }

  async remove(id: number): Promise<void> {
    await this.locationRepository.delete(id);
  }
}
