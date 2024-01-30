import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Ubication } from 'src/ubications/entity/ubication.entity';

@Entity('instructions')
export class Instruction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ nullable: true })
  Direction: string;

  @ManyToOne(() => Ubication, (ubication) => ubication.instructions)
  @JoinColumn({ name: 'id_ubication' })
  ubication: Ubication;
}
