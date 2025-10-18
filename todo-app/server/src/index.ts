import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

let todos: Todo[] = [];

app.get('/todos', (_req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const { completed } = req.body;

  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed } : todo
  );

  res.sendStatus(200);
});

app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

