

import { getNode, insertLast, clearContent } from './lib/index.js';
import jujeobData from './data/data.js';



// 1. 주접 떨기 버튼을 클릭하는 함수
//      - 주접 떨기 버튼 가져오기
//      - 클릭 이벤트 연결

// 2. input값 가져오기
//      - 콘솔에 출력

// 3. data 함수에서 주접 1개를 꺼내기 
//      - n번째 random 주접을 꺼내기
//      - Math.random()

// 4. result에 랜더링하기
//      - insertLast()


// 5. 예외 처리 
//      - 이름이 없을 경우 에러 처리 
//      - 숫자만 들어올 경우 에러 처리 



const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleClick(e) {
  e.preventDefault();

  const nickName = nameField.value;
  console.log(nickName);

  const data = jujeobData(nickName);
  const randomIndex = Math.floor(Math.random() * data.length);
  const message = data[randomIndex];

  clearContent(result);
  insertLast(result, message);
}

submit.addEventListener('click', handleClick);