import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Floor } from './entity/floor.entity';
import { CreateFloorDto, UpdateFloorDto } from './dto/floor.dto';

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

  async update(
    id: number,
    updateFloorDto: UpdateFloorDto,
  ): Promise<Floor | null> {
    const floor = await this.findOne(id);
    if (!floor) {
      return null; // El piso no fue encontrado
    }
    // Actualizar las propiedades del piso con los datos proporcionados
    Object.assign(floor, updateFloorDto);
    return this.floorRepository.save(floor); // Guardar los cambios y devolver el piso actualizado
  }

  async remove(id: number) {
    const deleteFloor = await this.floorRepository.delete(id);
    console.log(deleteFloor);
    return deleteFloor;
  }
}
