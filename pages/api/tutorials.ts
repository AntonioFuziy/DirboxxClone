import { NextApiRequest, NextApiResponse } from 'next';
import connectDatabase from '../../utils/database';

interface ErrorResponseType{
  error: string
}

interface SuccessResponseType{
  _id: string;
  user: string;
  title: string;
  description: string;
  link: string;
  likes: number;
  dislikes: number;
}

interface OkResponseType{
  ok: string;
}

export default async (req:NextApiRequest, res:NextApiResponse<ErrorResponseType | SuccessResponseType | OkResponseType>): Promise<void> => {
  if(req.method === "POST"){
    const { user, title, description, link, likes, dislikes } = req.body;

    const { db } = await connectDatabase();

    if(!title || !description || !link){
      res.status(400).json({error: "Missing parameters"});
      return;
    }

    const lineSplit = link.split("=")
    const newLink = lineSplit[1]

    const response = await db.collection("videos").insertOne({
      user,
      title,
      description,
      newLink,
      likes,
      dislikes
    })
    res.status(200).json(response.ops[0])
  } else if(req.method === "GET"){
    const { db } = await connectDatabase();

    const response = await db.collection("videos").find({}).sort({ metacritic: -1 }).limit(20).toArray();

    res.status(200).json({ok: "User created"})
    console.log(response)
  } else{
    res.status(400).json({ error: "wrong method" })
  }
}