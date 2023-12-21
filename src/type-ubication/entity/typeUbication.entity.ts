import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ubication } from 'src/ubications/entity/ubication.entity';

@Entity('type_ubication')
export class TypeUbication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Ubication, (ubication) => ubication.type)
  ubication: Ubication[];
}
