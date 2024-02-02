import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Location } from 'src/locations/entity/location.entity';
import { TypeUbication } from 'src/type-ubication/entity/typeUbication.entity';
import { Floor } from 'src/floor/entity/floor.entity';
import { Instruction } from 'src/instructions/entity/instructions.entity';
import { DetailPathwaysUbications } from 'src/detail_pathways_ubications/entity/detail_pathways_ubications.entity';

@Entity('ubications')
export class Ubication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  imageUrl: string;

  @ManyToOne(() => Location, (location) => location.ubications, {
    cascade: true,
  })
  @JoinColumn({ name: 'id_location' })
  location: Location;

  @ManyToOne(() => TypeUbication, (typeUbication) => typeUbication.ubication)
  @JoinColumn({ name: 'id_type_ubication' })
  type: TypeUbication;

  @ManyToOne(() => Floor, (floor) => floor.ubication)
  @JoinColumn({ name: 'id_floor' })
  floor: Floor;

  @OneToMany(() => Instruction, (instruction) => instruction.ubication)
  instructions: Instruction[];

  @OneToMany(
    () => DetailPathwaysUbications,
    (detail_pathways) => detail_pathways.ubication,
  )
  detail_pathways: DetailPathwaysUbications[];
}
