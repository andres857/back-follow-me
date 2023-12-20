import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('navigationpoints')
export class Navigationpoint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;
}
