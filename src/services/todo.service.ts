import { Repository } from "typeorm";
import { Todo } from "../db/entity/todo.entity";
import { TodoInterface } from "../types/todo.interface";
import { NotFoundError } from "../utils/custom-error";

export class TodoService {
  constructor(private readonly todoRepository: Repository<Todo>) {}

  async createTodo(data: Omit<TodoInterface, "id">): Promise<Todo> {
    const todo = this.todoRepository.create(data);
    const savedTodo = await this.todoRepository.save(todo);
    return savedTodo;
  }

  async getAllTodo(): Promise<TodoInterface[]> {
    const allTodos = await this.todoRepository.find();
    return allTodos;
  }

  async getTodoById(id: number): Promise<TodoInterface | null> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) throw new NotFoundError("Todo not found");
    return todo;
  }

  async updateTodoById(
    id: number,
    data: Partial<Omit<TodoInterface, "id">>,
  ): Promise<void> {
    const result = await this.todoRepository.update(id, data);
    if (result.affected === 0) throw new NotFoundError("Todo not found");
  }

  async deleteTodoById(id: number): Promise<void> {
    const result = await this.todoRepository.delete(id);
    if (result.affected === 0) throw new NotFoundError("Todo not found");
  }
}
