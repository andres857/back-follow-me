import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeUbication } from './entity/typeUbication.entity';
import { CreateTypeUbicationDto } from './dto/typeUbication.dto';

@Injectable()
export class TypeUbicationService {
  constructor(
    @InjectRepository(TypeUbication)
    private typeUbicationRepository: Repository<TypeUbication>,
  ) {}

  findAll(): Promise<TypeUbication[]> {
    return this.typeUbicationRepository.find();
  }

  findOne(id: number): Promise<TypeUbication | null> {
    return this.typeUbicationRepository.findOneBy({ id });
  }

  async findId(typeName: string) {
    const typeUbication = await this.typeUbicationRepository.findOne({
      where: {
        name: typeName,
      },
    });
    if (typeUbication !== null) {
      return typeUbication.id;
    }
    return typeUbication;
  }

  async create(
    createTypeUbicationDto: CreateTypeUbicationDto,
  ): Promise<TypeUbication> {
    const floor = this.typeUbicationRepository.create(createTypeUbicationDto);
    return this.typeUbicationRepository.save(floor);
  }

  async remove(id: number): Promise<void> {
    await this.typeUbicationRepository.delete(id);
  }
}
