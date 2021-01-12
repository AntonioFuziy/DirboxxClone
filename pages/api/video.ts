// import { NextApiRequest, NextApiResponse } from 'next';
import { NowRequest, NowResponse } from '@vercel/node';
import connectDatabase from '../../utils/database';

export default async (req:NowRequest, res:NowResponse): Promise<void> => {
  const { newLink } = req.body;

  if(!newLink){
    res.status(400).json({ error: "Missing Id from the video" });
    return;
  }

  const { db } = await connectDatabase();

  const response = await db.collection("videos").findOne({ newLink });

  if(!response) {
    res.status(400).json({ error: "Video not found" });
    return;
  }

  res.status(200).json(response);
}