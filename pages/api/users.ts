import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
if (req.method==="GET") {
    const { db } = await connectToDatabase();
    const users = await db.collection('users').find({}).toArray();
    res.status(200).json(users);
    
}
if (req.method==="POST") {
    const { db } = await connectToDatabase();
    const { name, email, password } = req.body;
    const result = await db.collection('users').insertOne({
      name,
      email,
      password,
      createdAt: new Date(),
    });
    res.status(201).json({ insertedId: result.insertedId });
    
}
}