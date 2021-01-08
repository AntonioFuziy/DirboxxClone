import { NextApiRequest, NextApiResponse } from 'next';
import connectDatabase from '../../utils/database';
interface SuccessResponseType{
  _id: string;
  user: string;
  title: string;
  description: string;
  link: string;
  likes: number;
  dislikes: number;
  // instrument: string[];
}

export default async (req:NextApiRequest, res:NextApiResponse): Promise<SuccessResponseType[]> => {
  if(req.method === "POST"){
    const { user, title, description, link, likes, dislikes } = req.body;

    const { db } = await connectDatabase();

    if(!title || !description || !link){
      res.status(400).json({error: "Missing parameters"});
      return;
    }

    var newLink = ""

    if (link.includes("&")){
      const firstLink = link.split("&")[0]
      newLink = firstLink.split("=")[1]
    } else{
      const lineSplit = link.split("=")
      newLink = lineSplit[1]
    }
    console.log(newLink)

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

    res.status(200).json(response)
    console.log(response)
  } else{
    res.status(400).json({ error: "wrong method" })
  }
}