import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  //   id ruta

  @Column({ unique: true, type: 'varchar', length: 255 })
  token_user: string;

  @Column()
  progress: number;

  @Column()
  completed: boolean;

  @Column({ nullable: true })
  time: number;

  @Column()
  description: string;

  //   idUbication
}
