import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Location } from 'src/locations/entity/location.entity';
import { User } from 'src/user/entity/user.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Location, (location) => location.client)
  locations: Location[];

  @OneToOne(() => User, (user) => user.client)
  users: Location[];
}
