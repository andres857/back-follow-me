import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, QueryFailedError, Repository } from 'typeorm';
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
    return await this.floorRepository.findOneBy({ id });
  }

  async create(createFloorDto: CreateFloorDto): Promise<Floor> {
    const floor = await this.floorRepository.create(createFloorDto);
    return await this.floorRepository.save(floor);
  }

  async update(updateFloorDto: UpdateFloorDto): Promise<Floor> {
    const floor = await this.findOne(updateFloorDto.id);
    if (!floor || updateFloorDto.name === undefined) {
      throw new NotFoundException(
        `Floor with id ${updateFloorDto.id} not found`,
      );
    }
    // Actualizar las propiedades del piso con los datos proporcionados
    Object.assign(floor, updateFloorDto);
    return this.floorRepository.save(floor); // Guardar los cambios y devolver el piso actualizado
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    if (found === null) {
      throw new NotFoundException(`Floor with id ${id} not found`);
    }
    return await this.floorRepository.delete(id);
  }
}
