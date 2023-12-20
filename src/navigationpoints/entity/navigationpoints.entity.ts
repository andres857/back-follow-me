import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Navigationpoints {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;
}
