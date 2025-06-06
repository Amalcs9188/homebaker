import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Missing MONGODB_URI in environment variables');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    console.log('Using cached MongoDB connection');
    return { client: cachedClient, db: cachedDb };
  }

  try {
    console.log('Trying to connect to MongoDB...');
    const client = await MongoClient.connect(uri as string);
    const db = client.db(); // default database from URI

    cachedClient = client;
    cachedDb = db;

    console.log('MongoDB connected successfully!');
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
