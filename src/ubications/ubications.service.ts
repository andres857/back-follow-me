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
    console.log('------');
    console.log(createUbicationDto);
    console.log('------');

    const ubication = await this.ubicationRepository.create(createUbicationDto);
    console.log(ubication);
    const newUbication = await this.ubicationRepository.save(ubication);
    return newUbication;
  }

  async createUbication(data: any, file: any) {
    const {
      nameUbication,
      typeUbication,
      location,
      floor,
      // descriptionUbication,
    } = data;
    const imageUrlDo = await this.spacesService.uploadFile(file);

    const payload = {
      name: nameUbication,
      idTypeUbication: parseInt(typeUbication, 10),
      id_location: parseInt(location, 10),
      idFloor: parseInt(floor, 10),
      imageUrl: imageUrlDo.Location,
    };

    const newUbication = await this.create(payload);
    console.log(newUbication);
    return newUbication;
  }
  async remove(id: number): Promise<void> {
    await this.ubicationRepository.delete(id);
  }
}
