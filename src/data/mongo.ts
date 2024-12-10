import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://jacobbarrus83:uQ22D8GkV38ixMmL@mongodbproject.3vr4i.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBProject';
let client: MongoClient;
let db: Db;
//frig
export const connectToDatabase = async (): Promise<Db> => {
  if (!db) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db('MongoDBProject');
  }
  return db;
};