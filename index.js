"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
(0, todo_1.addTodo)("Learn TypeScript");
(0, todo_1.addTodo)("Build a mini project");
(0, todo_1.listTodos)();
(0, todo_1.completeTodo)(1); // This ID may not exist (Date.now()) — you'll update below
(0, todo_1.listTodos)();
//# sourceMappingURL=index.js.map