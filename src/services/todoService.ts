import { AppDataSource } from "../db/data-source";
import { Todo } from "../db/entity/todo.entity";
import { TodoInterface } from "../types/todo.interface";

const todoRepository = AppDataSource.getRepository(Todo);

export class TodoService {
  static async createTodo(data: Omit<TodoInterface, "id">): Promise<void> {
    try {
      const todo = todoRepository.create(data);
      await todoRepository.insert(todo);
    } catch (error) {
      console.error("error getting all todos", error);
    }
  }

  static async getAllTodo(): Promise<TodoInterface[] | null> {
    try {
      const allTodos = await todoRepository.find();
      return allTodos;
    } catch (error) {
      console.error("error getting all todos", error);
      return null;
    }
  }

  static async getTodoById(id: number): Promise<TodoInterface | null> {
    try {
      const todo = await todoRepository.findOneBy({ id });
      return todo;
    } catch (error) {
      console.error("error getting todo by id", error);
      return null;
    }
  }

  static async updateTodoById(
    id: number,
    data: Partial<Omit<TodoInterface, "id">>,
  ): Promise<void> {
    try {
      const todoToUpdate = await todoRepository.findOneBy({ id });
      if (todoToUpdate) {
        await todoRepository.update(id, data);
      }
    } catch (error) {
      console.error("error getting todo by id", error);
    }
  }

  static async deleteTodoById(id: number): Promise<void> {
    try {
      const todo = await todoRepository.findOneBy({ id });
      if (todo) await todoRepository.remove(todo);
    } catch (error) {
      console.error("error deleting", error);
    }
  }
}
