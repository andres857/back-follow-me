import { DetailPathwaysUbications } from 'src/detail_pathways_ubications/entity/detail_pathways_ubications.entity';
import { History } from 'src/history/entity/history.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('pathways')
export class PathWay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  description: string;

  @OneToMany(
    () => DetailPathwaysUbications,
    (detail_pathways) => detail_pathways.pathways,
  )
  detail_pathways: DetailPathwaysUbications[];

  @OneToMany(() => History, (history) => history.pathways)
  history: History[];
}
