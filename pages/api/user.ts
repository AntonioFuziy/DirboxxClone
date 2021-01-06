import { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from '../../utils/database';

interface ErrorResponseType{
  error: string
}

interface SuccessResponseType{
  _id: string;
  email: string;
  password: string;
}

export default async(req: NextApiRequest, res:NextApiResponse<ErrorResponseType | SuccessResponseType>): Promise<void> => {
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