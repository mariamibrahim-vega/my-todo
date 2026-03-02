"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controllers_1 = require("../controllers/todo.controllers");
const todoRouter = (0, express_1.Router)();
todoRouter.get("/", todo_controllers_1.getAllTodos);
todoRouter.get("/:id", todo_controllers_1.getTodoById);
todoRouter.post("/", todo_controllers_1.createTodos);
todoRouter.put("/:id", todo_controllers_1.updateTodoById);
todoRouter.delete("/:id", todo_controllers_1.deleteTodoById);
exports.default = todoRouter;
//# sourceMappingURL=todo.route.js.map