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

import { Chapter } from "./Chapters";
import { SubTopics } from "./SubTopics";

@Entity("topics")
export class Topics extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  TopicName: string;

  @ManyToOne(() => Chapter, (chapter: any) => chapter.topics, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "chapId" })
  chapter = Chapter;

  @OneToMany(() => SubTopics, (subTopics: any) => subTopics.topic)
  subTopics: SubTopics[];

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;
}

// @OneToMany(
//     () => Transaction,
//     transaction => transaction.client)
// transactions: Transaction[];
//     @ManyToOne(  () => Client,
//     client => client.transactions,
//     { onDelete: "CASCADE" } // To delete the Foreign Key
// )

// @JoinColumn({ name: "client_id" })
// client: Client
