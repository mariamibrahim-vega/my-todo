"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const data_source_1 = require("../db/data-source");
const todo_entity_1 = require("../db/entity/todo.entity");
const todoRepository = data_source_1.AppDataSource.getRepository(todo_entity_1.Todo);
class TodoService {
    static async createTodo(data) {
        try {
            const todo = todoRepository.create(data);
            await todoRepository.insert(todo);
        }
        catch (error) {
            console.error("error getting all todos", error);
        }
    }
    static async getAllTodo() {
        try {
            const allTodos = await todoRepository.find();
            return allTodos;
        }
        catch (error) {
            console.error("error getting all todos", error);
            return null;
        }
    }
    static async getTodoById(id) {
        try {
            const todo = await todoRepository.findOneBy({ id });
            return todo;
        }
        catch (error) {
            console.error("error getting todo by id", error);
            return null;
        }
    }
    static async updateTodoById(id, data) {
        try {
            const todoToUpdate = await todoRepository.findOneBy({ id });
            if (todoToUpdate) {
                await todoRepository.update(id, data);
            }
        }
        catch (error) {
            console.error("error getting todo by id", error);
        }
    }
    static async deleteTodoById(id) {
        try {
            const todo = await todoRepository.findOneBy({ id });
            if (todo)
                await todoRepository.remove(todo);
        }
        catch (error) {
            console.error("error deleting", error);
        }
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todoService.js.map