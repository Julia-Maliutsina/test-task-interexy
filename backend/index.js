import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import { router } from './src/db/routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT;
const mongoCollection = process.env.CONNECTION;

app.use(cors());
app.use(bodyParser.json());
app.use(router);

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoCollection);
    app.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

connectToDatabase();
