import { Request, Response } from "express";
import { Subject } from "../model/Subject";

export default {
  get: async (req: Request, res: Response) => {
    const subjects = await Subject.find();
    res.status(201).json({ data: subjects });
  },
  post: async (req: Request, res: Response) => {
    try {
      const name = req.body.name;
      const subject = Subject.create({
        SubName: name,
      });

      await subject.save();
      res.status(201).json({ data: subject });
    } catch (err: any) {
      res.status(500).send("Something went wrong\n" + err);
    }
  },
};
