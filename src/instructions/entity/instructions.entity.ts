import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Ubication } from 'src/ubications/entity/ubication.entity';

@Entity('instructions')
export class Instructions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  imageUrl: string;

  @Column()
  description: string;

  @Column()
  Direction: string;

  @ManyToOne(() => Ubication, (ubication) => ubication.instructions)
  @JoinColumn({ name: 'id_ubication' })
  ubication: Ubication;
}
