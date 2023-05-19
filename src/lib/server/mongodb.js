import * as dotenv from "dotenv";
import { MongoClient } from 'mongodb';
dotenv.config();

export const client = new MongoClient(process.env.MONGODB_URI ?? 'mongodb://dummy');
export const database = client.db();
