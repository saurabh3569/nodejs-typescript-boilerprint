import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import connectDB from "./configs/db.config";
import router from "./routes";
import errorHandler from "./middleware/error-handler";
import { env } from "./configs/env.config";

const app = express();
app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(env.PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running at http://localhost:${env.PORT}`);
});
