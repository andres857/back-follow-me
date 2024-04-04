import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Ubication } from 'src/ubications/entity/ubication.entity';

@Entity('instructions')
export class Instruction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  Description: string;

  @Column({ nullable: true })
  Direction: string;

  @ManyToOne(() => Ubication, (ubication) => ubication.instructions)
  @JoinColumn({ name: 'id_ubication' })
  ubication: Ubication;
}
