import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Floor } from './entity/floor.entity';
import { CreateFloorDto } from './dto/floor.dto';

@Injectable()
export class FloorService {
  constructor(
    @InjectRepository(Floor)
    private floorRepository: Repository<Floor>,
  ) {}

  findAll(): Promise<Floor[]> {
    return this.floorRepository.find();
  }

  findOne(id: number): Promise<Floor | null> {
    return this.floorRepository.findOneBy({ id });
  }
  async create(createFloorDto: CreateFloorDto): Promise<Floor> {
    const floor = this.floorRepository.create(createFloorDto);
    return this.floorRepository.save(floor);
  }
  async remove(id: number): Promise<void> {
    await this.floorRepository.delete(id);
  }
}
