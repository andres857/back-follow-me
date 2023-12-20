import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ubications')
export class Ubication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  //  id Location

  // id piso

  // id typeubication
}
