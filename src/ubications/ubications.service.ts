import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubication } from './entity/ubication.entity';
import { CreateUbicationDto } from './dto/ubication.dto';
import { TypeUbicationService } from '../type-ubication/type-ubication.service';
import { SpacesService } from '../do-spaces/do-spaces.service';

@Injectable()
export class UbicationsService {
  constructor(
    @InjectRepository(Ubication)
    private ubicationRepository: Repository<Ubication>,
    private typeUbicationService: TypeUbicationService,
    private spacesService: SpacesService,
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
  async getUbicationsByType(typeUbication: string): Promise<any[]> {
    const query = `
      SELECT 
      u.id AS id_ubication,
      u.name AS ubication_name,
      t.name AS type_name
      FROM ubications u
      INNER JOIN type_ubication t ON u.id_type_ubication = t.id
      WHERE t.name = ?
    `;
    const ubications = await this.ubicationRepository.query(query, [
      typeUbication,
    ]);
    console.log(ubications);
    return ubications;
  }

  async create(createUbicationDto: CreateUbicationDto): Promise<Ubication> {
    const ubication = await this.ubicationRepository.create(createUbicationDto);
    console.log(ubication);
    const newUbication = await this.ubicationRepository.save(ubication);
    return newUbication;
  }

  async createUbication(data: any, file: any) {
    const imageUrlDo = await this.spacesService.uploadFile(file);
    console.log(imageUrlDo);

    // const payload = {
    //   name: data.nameUbication,
    //   id_type_ubication: data.typeUbication,
    //   id_location: data.id_location,
    //   // url: data.imageUrlDo
    // };
    // const newUbication = await this.create(payload);
    // console.log(newUbication);
    // return newUbication;
  }
  async remove(id: number): Promise<void> {
    await this.ubicationRepository.delete(id);
  }
}
