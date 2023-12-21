import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Client } from 'src/client/entity/client.entity';
import { Ubication } from 'src/ubications/entity/ubication.entity';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  address: string;

  @ManyToOne(() => Client, (client) => client.locations, { cascade: true })
  @JoinColumn({ name: 'id_client' })
  client: Client;

  @OneToMany(() => Ubication, (ubication) => ubication.location)
  ubications: Ubication;
}
