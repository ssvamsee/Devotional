require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const mongodb = require('mongoose')
// const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const cors = require('cors');
const port = 8080;

const url = process.env.DATABASE_URL
const collectionName = process.env.COLLECTION

app.use(express.json());
app.use(cors())

// async function connectToMongoDB() {
//   const client = new mongodb(url);
//   await client.connect();
//   console.log('Connected to MongoDB');
//   return client.db(dbName).collection(collectionName);
// }

const connectDB = async () => {
  try {
    const conn = await mongodb.connect(`${url}`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
app.get('/songs', async (req, res) => {
  const category = req.query.category;
  if (!category) {
    return res.status(400).json({ error: 'Category parameter is missing.' });
  }
  try {
    const connection = await connectDB();
    console.log(connection)
    const query = { category: category };
    const result = await mongoose.connection.collection(collectionName).find(query).toArray();
    res.json(result);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});