import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Chapter } from "./Chapters";

@Entity("subjects")
export class Subject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  SubName: String;

  @OneToMany(() => Chapter, (chapter: any) => chapter.subject)
  chapters: Chapter[];

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;
}
