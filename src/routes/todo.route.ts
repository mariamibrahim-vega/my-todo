import { Router } from "express";
import {
  createTodos,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodoById,
} from "../controllers/todo.controllers";

const todoRouter = Router();

todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getTodoById);
todoRouter.post("/", createTodos);
todoRouter.put("/:id", updateTodoById);
todoRouter.delete("/:id", deleteTodoById);

export default todoRouter;
