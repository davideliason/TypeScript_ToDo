"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
exports.listTodos = listTodos;
const types_1 = require("./types");
let todos = [];
function addTodo(title) {
    const newTodo = {
        id: Date.now(),
        title,
        completed: false,
    };
    todos.push(newTodo);
    console.log(`Added: "${title}"`);
}
function completeTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = true;
        console.log(`Completed: "${todo.title}"`);
    }
    else {
        console.log("Todo not found.");
    }
}
function listTodos() {
    console.log("\nYour Todos:");
    todos.forEach(t => {
        console.log(`[${t.completed ? "x" : " "}] ${t.id}: ${t.title}`);
    });
    console.log("");
}
//# sourceMappingURL=todo.js.map