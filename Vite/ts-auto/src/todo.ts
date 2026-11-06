import { loadStorage, saveStorage } from "./storage";
import type { TodoList } from "./type";



let todos:TodoList = loadStorage();

export function addTodo(content:string): void {
  const newTodo = {
    id: Date.now(),
    content: content,
    completed: false
  }

  todos.push(newTodo);
  saveStorage(todos);

  console.log(todos);

}



// todos 배열에서 특정 id만 제외하고(filter) 나머지 배열을 받음.


export function deleteTodo(id:number) :void{
  todos = todos.filter((todo) => todo.id !== id);
  saveStorage(todos);
  
}


// map을 사용해 기존 배열에 id가 일치하는 대상만 찾아 completed를 반전시킨다.
export function toggleTodo(id:number):void{
  
  todos = todos.map((todo)=>
    todo.id === id ? {...todo, completed: !todo.completed} : todo
  )
  saveStorage(todos);
}


// updateTodo
export function updateTodo(id:number,newContent:string): void{
  todos = todos.map((todo)=>
    todo.id === id ? {...todo, content: newContent} : todo
  )
  saveStorage(todos);
}

// 완료 항목만 보기 
export function getCompletedTodos():TodoList{
  return todos.filter((todo)=> todo.completed);
}

