import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ubication } from 'src/ubications/entity/ubication.entity';

@Entity('floor')
export class Floor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Ubication, (ubication) => ubication.floor)
  ubication: Ubication;
}
