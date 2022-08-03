import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { Topics } from "./Topics";

@Entity("sub_topics")
export class SubTopics extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  SubTopicName: string;

  @ManyToOne(
    () => Topics,
    (topic: any) => topic.subTopics,
    { onDelete: "CASCADE" } // To delete the Foreign Key
  )
  @JoinColumn({ name: "topicId" })
  topic: Topics;

  //     @ManyToOne(  () => Client,
  //     client => client.transactions,
  //     { onDelete: "CASCADE" } // To delete the Foreign Key
  // )

  // @JoinColumn({ name: "client_id" })
  // client: Client

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;
}
