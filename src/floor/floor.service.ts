import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Floor } from './entity/floor.entity';
import { CreateFloorDto, UpdateFloorDto } from './dto/floor.dto';
import { throwError } from 'rxjs';

@Injectable()
export class FloorService {
  constructor(
    @InjectRepository(Floor)
    private floorRepository: Repository<Floor>,
  ) {}

  async findAll(): Promise<Floor[]> {
    return await this.floorRepository.find();
  }

  async findOne(id: number): Promise<Floor | null> {
    const floor = await this.floorRepository.findOneBy({ id });
    if (!floor) {
      throw new NotFoundException(`Floor with id ${id} not found`);
    }
    return floor;
  }

  async create(createFloorDto: CreateFloorDto): Promise<Floor> {
    const floor = await this.floorRepository.create(createFloorDto);
    return await this.floorRepository.save(floor);
  }

  async update(id, updateFloorDto: UpdateFloorDto): Promise<Floor> {
    const floor = await this.findOne(id);
    Object.assign(floor, updateFloorDto);
    return await this.floorRepository.save(floor); // Guardar los cambios y devolver el piso actualizado
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.floorRepository.delete(id);
  }
}
