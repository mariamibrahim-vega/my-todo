"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const initializeDB_1 = require("./utils/initializeDB");
const todo_route_1 = __importDefault(require("./routes/todo.route"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("TODO_APP");
});
app.use("/todos", todo_route_1.default);
(0, initializeDB_1.initializeDB)().then(() => app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}));
//# sourceMappingURL=app.js.map