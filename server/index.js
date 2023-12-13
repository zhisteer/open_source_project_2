import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js'
import { discussRouter } from './routes/discussions.js';
import 'dotenv';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/discuss", discussRouter);

const mongoDBConnectionString = "mongodb+srv://bilgee:Blge1490@koreigner0.zvovaui.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
