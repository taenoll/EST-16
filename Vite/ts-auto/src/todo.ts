import type { TodoList } from './type';
import { loadStorage, saveStorage } from './storage';



let todos: TodoList = loadStorage();

export function addTodo(content: string): void {
  const newTodo = {
    id: Date.now(),
    content: content,
    completed: false
  };

  todos.push(newTodo);
  saveStorage(todos);

  console.log(todos);
}