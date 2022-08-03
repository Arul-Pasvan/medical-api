import { Request, Response } from "express";
import { Chapter } from "../model/Chapters";
import { Subject } from "../model/Subject";
import { createQueryBuilder } from "typeorm";

export default {
  get: async (req: Request, res: Response) => {
    try {
      const { subId } = req.params;
      const subjectId = await Subject.findOneById(subId);

      if (!subjectId) {
        res.status(400).json({ msg: "Subject is not exist" });
      } else {
        const chapter = await createQueryBuilder("chapters")
          .select("chapters")
          .from(Chapter, "chapters")
          .where("chapters.subId = :subId", { subId })
          .getMany();

        if (chapter.length > 0) {
          res.status(201).json({ data: chapter });
        } else {
          res
            .status(400)
            .json({ msg: "This subject is not contain any chapters" });
        }
      }
    } catch (err) {
      res.status(500).send("Something went wrong\n" + err);
    }
  },
  post: async (req: Request, res: Response) => {
    try {
      const { subId } = req.params;
      const chapName = req.body.name;
      const subject: any = await Subject.findOneById(subId);

      if (!subject) {
        res.json({ msg: "Subject is not found" });
      } else {
        const chapter = Chapter.create({
          chapName,
          subject,
        });

        await chapter.save();
        res.status(201).json({ data: chapter });
      }
    } catch (err: any) {
      res.status(500).send("Something went wrong\n" + err);
    }
  },
};
