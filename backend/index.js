import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import { router } from './src/db/routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(router);

async function connectToDatabase() {
  try {
    await mongoose.connect(
      'mongodb+srv://julia:QQpoQQ)(8@cluster0.uri4zvs.mongodb.net/test-task-interexy',
    );
    app.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

connectToDatabase();
