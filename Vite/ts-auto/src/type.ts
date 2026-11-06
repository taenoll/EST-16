// 할 일 목록 = Item
export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 할 일 목록 = Todo의 배열
export type TodoList = Todo[];