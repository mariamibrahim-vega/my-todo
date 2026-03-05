import { Router } from "express";
import { AppDataSource } from "../db/data-source";
import { Todo } from "../db/entity/todo.entity";
import { TodoService } from "../services/todo.service";
import { TodoController } from "../controllers/todo.controller";

const todoRouter = Router();
const todoRepository = AppDataSource.getRepository(Todo);
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

todoRouter.get("/", todoController.getAllTodo);
todoRouter.get("/:id", todoController.getTodoById);
todoRouter.post("/", todoController.createTodo);
todoRouter.put("/:id", todoController.updateTodoById);
todoRouter.delete("/:id", todoController.deleteTodoById);

export default todoRouter;
