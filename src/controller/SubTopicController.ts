import { Request, Response } from "express";
import { SubTopics } from "../model/SubTopics";

export default {
  get: async (req: Request, res: Response) => {
    const subTopics = await SubTopics.find();
    res.send(subTopics);
  },
  post: async (req: Request, res: Response) => {
    try {
      const name = req.body.name;
      const subTopics = SubTopics.create({
        SubTopicName: name,
      });

      await subTopics.save();
      res.status(201).send(subTopics);
    } catch (err: any) {
      res.status(500).send("Something went wrong\n" + err);
    }
  },
};
