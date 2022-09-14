import connectToDatabase from "@lib/mongodb";
import Posts from "models/posts";
import { Timestamp } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        const posts = await Posts.find().sort({ timestamp: -1 });
        res.status(201).json(posts);
      } catch (error) {
        res.status(500).json(error);
      }
    case "POST":
      try {
        const post = await Posts.create(req.body);
        res.status(201).json(post);
      } catch (error) {
        res.status(500).json(error);
      }
  }
};

export default handler;
