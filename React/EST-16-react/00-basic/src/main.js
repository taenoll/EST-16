import { createElement } from "./lib/virtual/index.js";


/* actual DOM 실제 돔
웹 API를 사용해서 문서 객체(Document Object)를 생성
*/

// 부모 요소 생성
const divElement = document.createElement('div');

// 자식 요소 생성
const buttonElement = document.createElement('button');
buttonElement.textContent = 'hello';

// 요소간의 관계 형성
divElement.append(buttonElement);

// 렌더링 위치 정하기
const actualDomElement = document.getElementById('app');

// 실제 DOM에 마운트(Mount, 확장 === 렌더링)
actualDomElement.append(divElement);





