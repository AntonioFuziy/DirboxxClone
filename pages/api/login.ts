import { NextApiRequest, NextApiResponse } from "next";

import jwt from 'jsonwebtoken';

const KEY = "duias9bfu9asfboasfboa"

export default function(req: NextApiRequest, res: NextApiResponse){
    if(!req.body){
        res.statusCode = 404
        res.end("Error")
        return
    }

    const { email, password } = req.body

    res.json({
        token: jwt.sign(
            {
            email,
            admin: email === "admin@admin.com" && password === "admin"
        },
        KEY)
    })
}