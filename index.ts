import { addTodo, completeTodo, listTodos } from "./todo";

addTodo("Learn TypeScript");
addTodo("Build a mini project");
listTodos();

completeTodo(1); // This ID may not exist (Date.now()) — you'll update below
listTodos();

