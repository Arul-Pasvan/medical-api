import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Subject } from "./Subject";
import { Topics } from "./Topics";

@Entity("chapters")
export class Chapter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chapName: string;

  @OneToMany(() => Topics, (topics: any) => topics.chapter)
  topics: Topics[];

  @ManyToOne(
    () => Subject,
    (subject: any) => subject.chapter,
    { onDelete: "CASCADE" } // To delete the Foreign Key
  )
  @JoinColumn({ name: "subId" })
  subject: Subject;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;
}
