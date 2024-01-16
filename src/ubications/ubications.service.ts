import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubication } from './entity/ubication.entity';
import { CreateUbicationDto } from './dto/ubication.dto';
import { TypeUbicationService } from '../type-ubication/type-ubication.service';
import { type } from 'os';

@Injectable()
export class UbicationsService {
  constructor(
    @InjectRepository(Ubication)
    private ubicationRepository: Repository<Ubication>,
    private typeUbicationService: TypeUbicationService,
  ) {}

  findAll(): Promise<Ubication[]> {
    return this.ubicationRepository.find();
  }

  findOne(id: number): Promise<Ubication | null> {
    return this.ubicationRepository.findOne({
      where: { id: id },
      relations: ['type'],
    });
  }
  // falta por definir la interfaz de datos que retorna la funcion
  async getUbicationsByType(typeUbication: string) {
    const idTypeUbication =
      await this.typeUbicationService.findId(typeUbication);
    console.log('koo', idTypeUbication, typeof idTypeUbication);
    if (typeof idTypeUbication !== 'number') {
      return [];
    }
    const ubications = await this.ubicationRepository.find({
      where: {
        type: { id: idTypeUbication },
      },
    });
    console.log(ubications);
  }

  async create(createUbicationDto: CreateUbicationDto): Promise<Ubication> {
    const ubication = this.ubicationRepository.create(createUbicationDto);
    return this.ubicationRepository.save(ubication);
  }
  async remove(id: number): Promise<void> {
    await this.ubicationRepository.delete(id);
  }
}
