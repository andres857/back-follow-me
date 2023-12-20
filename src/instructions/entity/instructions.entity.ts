import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Instructions')
export class Instructions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  imageUrl: string;

  @Column()
  description: string;

  //   idUbication
}
