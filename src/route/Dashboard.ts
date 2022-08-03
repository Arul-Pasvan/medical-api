import { Router } from "express";
import ChapterController from "../controller/ChapterController";
import TopicController from "../controller/TopicController";
import SubjectController from "../controller/SubjectController";
import SubTopicController from "../controller/SubTopicController";

const Home = Router();

Home.get("/subject", SubjectController.get);
Home.post("/subject", SubjectController.post);
Home.get("/subject/:subId/chapters", ChapterController.get);
Home.post("/subject/:subId/chapters", ChapterController.post);
Home.get("/subject/:subId/chapters/:chapId/topics", TopicController.get);
Home.post("/subject/:subId/chapters/:chapId/topics", TopicController.post);
Home.get(
  "/subject/:subId/chapters/:chapId/topics/:topId/subtopics",
  SubTopicController.get
);
Home.post(
  "/subject/:subId/chapters/:chapId/topics/:topId/subtopics",
  SubTopicController.post
);

export default Home;
