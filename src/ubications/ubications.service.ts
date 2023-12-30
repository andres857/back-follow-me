import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubication } from './entity/ubication.entity';
import { CreateUbicationDto } from './dto/ubication.dto';

@Injectable()
export class UbicationsService {
  constructor(
    @InjectRepository(Ubication)
    private ubicationRepository: Repository<Ubication>,
  ) {}

  findAll(): Promise<Ubication[]> {
    return this.ubicationRepository.find();
  }

  findOne(id: number): Promise<Ubication | null> {
    return this.ubicationRepository.findOneBy({ id });
  }
  async create(createUbicationDto: CreateUbicationDto): Promise<Ubication> {
    const ubication = this.ubicationRepository.create(createUbicationDto);
    return this.ubicationRepository.save(ubication);
  }
  async remove(id: number): Promise<void> {
    await this.ubicationRepository.delete(id);
  }
}
