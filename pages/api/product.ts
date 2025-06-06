import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { connectToDatabase } from '@/lib/db';
import { ObjectId } from 'mongodb';
import cloudinary from '@/lib/cloudinary';
import { upload } from '@/middleware/multer';
import fs from 'fs';





interface ExtendedRequest extends NextApiRequest {
  file?: Express.Multer.File;
  body: {
    image?: string;
    id?: string;
    action?: string;
    name?: string;
    description?: string;
    price?: string;
  };
}

const handler = createRouter<ExtendedRequest, NextApiResponse>();

const runMiddleware = (req: any, res: any, fn: Function) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });

handler.use(async (req, res, next) => {

  await runMiddleware(req, res, upload.single('image'));
  next();
});

handler.post(async (req, res) => {
  const { db } = await connectToDatabase();
  const action = req.body.action;
  
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
    
  }
  const filePath = req.file.path;
  const result = await cloudinary.uploader.upload(filePath);
  const image = result.secure_url;
  fs.unlinkSync(filePath);

  if (action === 'create') {
    const { name, description, price } = req.body;
 
    // cloudinary
    const result = await db.collection('products').insertOne({
      name,
      description,
      price,
      image,
      createdAt: new Date(),
    });

    return res.status(201).json({ insertedId: result.insertedId });
  }

  if (action === 'update') {
    const { id, name, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
 

    if (!id) {
      return res.status(400).json({ error: ' product not found' });
    }
    const result = await db.collection('products').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, description, price , image } }
    );
    return res.status(200).json(result);
  }

  return res.status(400).json({ error: 'Invalid or missing action' });
});

handler.get(async (req, res) => {
  const { db } = await connectToDatabase();
  const products = await db.collection('products').find({}).toArray();
  return res.status(200).json(products);
})
export default handler.handler();

export const config = {
  api: {
    bodyParser: false,
  },
};
