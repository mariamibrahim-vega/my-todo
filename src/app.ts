import "reflect-metadata";
import express, { type Request, type Response } from "express";
import "dotenv/config";
import { initializeDB } from "./utils/initialize-database";
import todoRouter from "./routes/todo.route";
import { errorHandler } from "./middleware/error-handler";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("TODO_APP");
});

app.use("/todos", todoRouter);

app.use(errorHandler);

initializeDB().then(() =>
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }),
);
