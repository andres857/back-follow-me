import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  address: string;
  //   id client
}
