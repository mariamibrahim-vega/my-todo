import { NextFunction, type Request, type Response } from "express";
import { TodoService } from "../services/todoService";

export const createTodos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await TodoService.createTodo(req.body);
    res.status(200).json({ message: "todo successfully created" });
  } catch (error) {
    next(error);
  }
};

export const getAllTodos = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todos = await TodoService.getAllTodo();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const getTodoById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = Number(req.params.id);
  if (!id) res.status(400).json({ message: "Invalid ID" });
  try {
    const todo = await TodoService.getTodoById(id);
    if (!todo) res.status(404).json({ message: "Todo not found" });
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const updateTodoById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = Number(req.params.id);
  if (!id) res.status(400).json({ message: "Invalid ID" });
  const data = req.body;
  try {
    await TodoService.updateTodoById(id, data);
    res.status(200).json({ message: `todo ${id} successfully updated` });
  } catch (error) {
    next(error);
  }
};

export const deleteTodoById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = Number(req.params.id);
  if (!id) res.status(400).json({ message: "Invalid ID" });
  try {
    await TodoService.deleteTodoById(id);
    res.status(200).json({ message: "todo successfully deleted" });
  } catch (error) {
    next(error);
  }
};
