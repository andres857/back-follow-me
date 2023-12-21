import { PathWay } from 'src/pathways/entity/pathways.entity';
import { Ubication } from 'src/ubications/entity/ubication.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('detail_pathways_ubications')
export class DetailPathwaysUbications {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  time: number;

  @Column({ nullable: false })
  order: number;

  @ManyToOne(() => Ubication, (ubication) => ubication.detail_pathways, {
    cascade: true,
  })
  @JoinColumn({ name: 'id_ubication' })
  ubication: Ubication;

  @ManyToOne(() => PathWay, (pathways) => pathways.detail_pathways, {
    cascade: true,
  })
  @JoinColumn({ name: 'id_pathways' })
  pathways: PathWay;

}
