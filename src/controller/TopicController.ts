import { Request, Response } from "express";
import { Topics } from "../model/Topics";

export default {
  get: async (req: Request, res: Response) => {
    const topics = await Topics.find();
    res.send(topics);
  },
  post: async (req: Request, res: Response) => {
    try {
      const name = req.body.name;
      const topics = Topics.create({
        TopicName: name,
      });

      await topics.save();
      res.status(201).send(topics);
    } catch (err: any) {
      res.status(500).send("Something went wrong\n" + err);
    }
  },
};
