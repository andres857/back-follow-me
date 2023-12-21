import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Client } from 'src/client/entity/client.entity';
import { Rol } from "src/roles/entity/roles.entity";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'varchar', length: 60 })
  password: string;

  @ManyToOne(() => Client, (client) => client.users, { cascade: true })
  @JoinColumn({ name: 'id_client' })
  client: Client;

  @ManyToOne(() => Rol, (roles) => roles.user, { cascade: true })
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;
}
