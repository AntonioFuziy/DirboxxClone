// import { NextApiRequest, NextApiResponse } from "next";
import { NowRequest, NowResponse } from '@vercel/node';
import connectDatabase from '../../utils/database';

export default async(req: NowRequest, res:NowResponse): Promise<void> => {
  if(req.method === "POST"){
    const { email, password } = req.body;

    const { db } = await connectDatabase();

    if(!email || !password){
      res.status(400).json({ error: "Missing parameters" });
      return;
    }

    const response = await db.collection("users").insertOne({
        email,
        password
    })
    res.status(200).json(response.ops[0]);
  } else{
    res.status(400).json({ error: "error method" })
  }
}