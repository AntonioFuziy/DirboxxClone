import { Db, MongoClient } from 'mongodb';

interface ConnectType {
  db: Db;
  client: MongoClient;
}

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connectDatabase(): Promise<ConnectType>{
  if(!client.isConnected()) await client.connect();

  const db = client.db("users")
  return {db, client};
}

