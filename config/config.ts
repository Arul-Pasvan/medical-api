import { createConnection } from "typeorm";

import { Subject } from "../src/model/Subject";
import { Chapter } from "../src/model/Chapters";
import { Topics } from "../src/model/Topics";
import { SubTopics } from "../src/model/SubTopics";

export default async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123",
      database: "test-medical",
      entities: [Subject, Chapter, Topics, SubTopics],
      synchronize: true,
    });
    console.log("connected to postgres");
  } catch (err) {
    console.log("Unable to connect \n", err);
  }
};
