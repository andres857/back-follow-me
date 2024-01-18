import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entity/location.entity';
import { CreateLocationDto } from './dto/location.dto';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    private clientService: ClientService,
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  findOne(id: number): Promise<Location | null> {
    return this.locationRepository.findOneBy({ id });
  }

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const clientFound = await this.clientService.findOne(
      createLocationDto.id_client,
    );
    // console.log(clientFound);
    console.log(createLocationDto);

    const location = this.locationRepository.create(createLocationDto);
    console.log(location);

    const rta = await this.locationRepository.save(location);
    console.log(rta);
    return rta;
  }

  async remove(id: number): Promise<void> {
    await this.locationRepository.delete(id);
  }
}
