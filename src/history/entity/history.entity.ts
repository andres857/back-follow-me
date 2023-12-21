import { PathWay } from 'src/pathways/entity/pathways.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

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

  @ManyToOne(() => PathWay, (pathways) => pathways.detail_pathways, {
    cascade: true,
  })
  @JoinColumn({ name: 'id_pathways' })
  pathways: PathWay;
}
