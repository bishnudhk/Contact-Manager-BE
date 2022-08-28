import dotent from "dotenv";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import logger from "./misc/logger";
import { errorHandler } from './middlewares/errorHandler';
import { notFound } from './middlewares/notFound';
import appRouter from "./routes/index";

dotent.config();

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

app.use(appRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.clear();
  logger.info(`Server is running in port ${PORT}`);
});

