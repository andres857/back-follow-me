import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubication } from './entity/ubication.entity';
import { CreateUbicationDto } from './dto/ubication.dto';
import { SpacesService } from '../do-spaces/do-spaces.service';
import { InstructionsService } from '../instructions/instructions.service';

@Injectable()
export class UbicationsService {
  constructor(
    @InjectRepository(Ubication)
    private ubicationRepository: Repository<Ubication>,
    private instructionsService: InstructionsService,
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
    const ubicationsByType = await this.ubicationRepository.find({
      relations: ['type', 'location', 'floor'],
      where: {
        type: {
          name: typeUbication,
        },
      },
    });
    return ubicationsByType;
  }

  async create(data: CreateUbicationDto): Promise<any | null> {
    try {
      const ubication = this.ubicationRepository.create(data as any);
      return await this.ubicationRepository.save(ubication);
    } catch (error) {
      throw new Error(`Error al crear la ubicación: ${error.message}`);
    }
  }

  async createUbication(data: any, file: any) {
    const imageUrlDo = await this.spacesService.uploadFile(file);
    console.log('-----dataService-----');
    console.log(data);
    console.log('-----dataService-----');

    const payload = {
      name: data.nameUbication,
      imageUrl: imageUrlDo.Location,
      location: parseInt(data.location),
      type: parseInt(data.typeUbication),
      floor: parseInt(data.floor),
    };

    try {
      const newUbication = await this.create(payload);
      const idUbication = newUbication.id;
      // create instructions
      const payloadNewInstruction = {
        description: data.descriptionUbication,
        Direction: data.direction,
        ubication: idUbication,
      };
      const newInstruction = await this.instructionsService.create(
        payloadNewInstruction as any,
      );
      console.log('Instruction created');
      console.log(newInstruction);
      console.log('Instruction created');

      return newUbication;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Error al crear la ubicación con datos adicionales: ${error.message}`,
      );
    }
  }

  async remove(id: number): Promise<void> {
    await this.ubicationRepository.delete(id);
  }
}
