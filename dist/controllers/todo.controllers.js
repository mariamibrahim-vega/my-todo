"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoById = exports.updateTodoById = exports.getTodoById = exports.getAllTodos = exports.createTodos = void 0;
const todoService_1 = require("../services/todoService");
const createTodos = async (req, res, next) => {
    try {
        await todoService_1.TodoService.createTodo(req.body);
        res.status(200).json({ message: "todo successfully created" });
    }
    catch (error) {
        next(error);
    }
};
exports.createTodos = createTodos;
const getAllTodos = async (_req, res, next) => {
    try {
        const todos = await todoService_1.TodoService.getAllTodo();
        res.status(200).json(todos);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllTodos = getAllTodos;
const getTodoById = async (req, res, next) => {
    const id = Number(req.params.id);
    if (!id)
        res.status(400).json({ message: "Invalid ID" });
    try {
        const todo = await todoService_1.TodoService.getTodoById(id);
        if (!todo)
            res.status(404).json({ message: "Todo not found" });
        res.status(200).json(todo);
    }
    catch (error) {
        next(error);
    }
};
exports.getTodoById = getTodoById;
const updateTodoById = async (req, res, next) => {
    const id = Number(req.params.id);
    if (!id)
        res.status(400).json({ message: "Invalid ID" });
    const data = req.body;
    try {
        await todoService_1.TodoService.updateTodoById(id, data);
        res.status(200).json({ message: `todo ${id} successfully updated` });
    }
    catch (error) {
        next(error);
    }
};
exports.updateTodoById = updateTodoById;
const deleteTodoById = async (req, res, next) => {
    const id = Number(req.params.id);
    if (!id)
        res.status(400).json({ message: "Invalid ID" });
    try {
        await todoService_1.TodoService.deleteTodoById(id);
        res.status(200).json({ message: "todo successfully deleted" });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteTodoById = deleteTodoById;
//# sourceMappingURL=todo.controllers.js.map