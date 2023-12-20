import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class instructions {
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
