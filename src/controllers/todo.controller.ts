import { NextFunction, type Request, type Response } from "express";
import { TodoService } from "../services/todo.service";
import { NotFoundError } from "../utils/custom-error";
import { parseId } from "../utils/helpers";

export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todo = await this.todoService.createTodo(req.body);
      res
        .status(201)
        .location(`/todos/${todo.id}`)
        .json({ message: "Todo successfully created", data: todo });
    } catch (error) {
      next(error);
    }
  };

  getAllTodo = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = await this.todoService.getAllTodo();
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  };

  getTodoById = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseId(req.params.id);
    try {
      const todo = await this.todoService.getTodoById(id);
      if (!todo) throw new NotFoundError("Todo not found");
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  };

  updateTodoById = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseId(req.params.id);
    const data = req.body;
    try {
      await this.todoService.updateTodoById(id, data);
      res.status(200).json({ message: `todo ${id} successfully updated` });
    } catch (error) {
      next(error);
    }
  };

  deleteTodoById = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseId(req.params.id);
    try {
      await this.todoService.deleteTodoById(id);
      res.status(200).json({ message: "todo successfully deleted" });
    } catch (error) {
      next(error);
    }
  };
}
