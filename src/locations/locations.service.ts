import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entity/location.entity';
import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  async findOne(id: number): Promise<Location | null> {
    const location = await this.locationRepository.findOneBy({ id });
    if (!location) {
      throw new NotFoundException(`Location with id ${id} not found`);
    }
    return location;
  }

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = await this.locationRepository.create(createLocationDto);
    return await this.locationRepository.save(location);
  }

  async update(id, updateLocationDto: UpdateLocationDto): Promise<Location> {
    const location = await this.findOne(id);
    Object.assign(location, updateLocationDto);
    return await this.locationRepository.save(location); // Guardar los cambios y devolver el piso actualizado
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.locationRepository.delete(id);
  }
}
