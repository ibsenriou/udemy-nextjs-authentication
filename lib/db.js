import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin@cluster0.itypnoi.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}

export default connectToDatabase;
