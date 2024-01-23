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
    return ubications;
  }

  async create(createUbicationDto: CreateUbicationDto) {
    try {
      const newUbication = await this.ubicationRepository.query(
        `INSERT INTO ubications (name, id_type_ubication, id_location, id_floor,imageUrl) VALUES (?, ?, ?, ?, ?)`,
        [
          createUbicationDto.name,
          createUbicationDto.id_type_ubication,
          createUbicationDto.id_location,
          createUbicationDto.id_floor,
          // createUbicationDto.imageUrl,
        ],
      );
      return newUbication;
    } catch (error) {
      const customError = new Error({
        message: 'Error al crear la ubicación en la base de datos.',
        cause: 500,
      });

      // Aquí puedes agregar propiedades adicionales al error si es necesario
      customError.cause = error;

      // Lanzar el error personalizado
      throw customError;
    }
  }

  async createUbication(data: any, file: any) {
    const imageUrlDo = await this.spacesService.uploadFile(file);
    console.log(data);

    const payload = {
      name: data.nameUbication,
      id_type_ubication: parseInt(data.typeUbication),
      id_location: parseInt(data.location),
      id_floor: parseInt(data.floor),
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
