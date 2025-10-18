import { Todo } from "./types";

let todos: Todo[] = [];

export function addTodo(title: string): void {
  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
  };
  todos.push(newTodo);
  console.log(`Added: "${title}"`);
}

export function completeTodo(id: number): void {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = true;
    console.log(`Completed: "${todo.title}"`);
  } else {
    console.log("Todo not found.");
  }
}

export function listTodos(): void {
  console.log("\nYour Todos:");
  todos.forEach(t => {
    console.log(`[${t.completed ? "x" : " "}] ${t.id}: ${t.title}`);
  });
  console.log("");
}

