// src/pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/db';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();

  if (req.method === 'GET') {
    const products = await db.collection('products').find({}).toArray();
    res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const { action } = req.body;
    
    if (action === 'add') {
      const { name, description, price ,image } = req.body;
    
      console.log(image);
      
      const result = await db.collection('products').insertOne({ name, description, price ,image});
      res.status(201).json({ insertedId: result.insertedId });
    }
    if (action === 'update') {
      
      const { id, name, description, price } = req.body;
     
      const result = await db.collection('products').updateOne({ _id: id }, { $set: { name, description, price } });
      res.status(200).json({ updatedCount: result.modifiedCount });
    }
    if (action === 'delete') {
      // id is a string
      const { id } = req.body;
       console.log(id);
      const result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ deletedCount: result.deletedCount });
    }
  }
}


