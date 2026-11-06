import { loadStorage } from './storage';
import { addTodo, deleteTodo, getCompletedTodos, toggleTodo, updateTodo } from './todo';
import type { Todo } from './type';
import S from '/src/style.module.css';


const tag = /* html */`
  <div class="${S.container}">
    <button type="button" class="completed">완료 항목만 보기</button>
    <hr/>
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo"/>
      <button type="submit">추가</button>
    </form>

    <hr/>

    <ul id="renderPlace"></ul>
  </div>
`
document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);



function empty():string{
  return `
    <div class="${S.empty}">
      <h3>오늘은 무슨 일을 할까? 🤔</h3>
    </div>
  `
}


let toggle = false;
const input = document.querySelector('#todo') as HTMLInputElement; // Input태그가 맞아, 무조건 DOM에 존재해. 
const form = document.querySelector('form');
const list = document.querySelector('#renderPlace') as HTMLUListElement;
const completed = document.querySelector('.completed') as HTMLButtonElement;


function handleSubmit(e:SubmitEvent){
  e.preventDefault();

  if(!input.value.trim()) return;
  
  addTodo(input.value.trim())
  input.value = '';
  render()
}

function render(showCompleted:boolean = false){
  const todos:Todo[] = showCompleted ? getCompletedTodos() :  loadStorage();


  if(showCompleted){
    completed.textContent = '전체 항목 보기'
  }else{
    completed.textContent = '완료 항목 보기'
  }

  list.innerHTML = todos.length < 1 ? empty() : '';

  todos.forEach((todo:Todo)=>{
    const li = document.createElement('li');
    li.dataset.id = String(todo.id);
    li.innerHTML = `
      <input type="checkbox" name="checkbox" ${todo.completed ? 'checked' : ''}/>
      <span contenteditable="true">${todo.content}</span>
      <button type="button" class="delete">삭제</button>
    `

    const btn = li.querySelector('button');
    const checkbox = li.querySelector('input');
    const span = li.querySelector('span');

    btn?.addEventListener('click',()=>{
      deleteTodo(todo.id);
      render()
    })

    checkbox?.addEventListener('change',()=>{
      
      toggleTodo(todo.id)
      render()
    })

    span?.addEventListener('blur',()=>{
      const newContent = span.textContent.trim()
      if(newContent && newContent !== todo.content){
        
        updateTodo(todo.id, newContent)
        render();
      }
      
      
    })
    // span에게 blur 이벤트 
    


    list.appendChild(li);


  })
}

render()

function handleCompleted(){
  render(toggle);
  toggle = !toggle;
  
}


form?.addEventListener('submit',handleSubmit);
completed?.addEventListener('click',handleCompleted);


