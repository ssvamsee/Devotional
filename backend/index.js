const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

const url = process.env.DATABASE_URL
const dbName = process.env.DATABASE
const collectionName = process.env.COLLECTION

app.use(express.json());

async function connectToMongoDB() {
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected to MongoDB');
  return client.db(dbName).collection(collectionName);
}

app.get('/songs', async (req, res) => {
  const category = req.query.category;
  if (!category) {
    return res.status(400).json({ error: 'Category parameter is missing.' });
  }

  const collection = await connectToMongoDB();

  try {
    const query = { category: category };
    const result = await collection.find(query).toArray();
    res.json(result);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
