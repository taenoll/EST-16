/* DOM을 조작 document.querySelector()   => null  => HTML에 존재하지 않음 or 아직 로드가 안됨(defer) or 태그 생성이 안됨 elem?.addEventListener() */
//             꽤 위험하다  TS 


/* 

<input type="text" id="textField">

*/
// 타입 단언 -> 얘 input 맞는데? -> 책임 내가 
// const input = document.querySelector('#textField') as HTMLInputElement;   // type assertion
// const input = document.querySelector<HTMLInputElement>('#textField');   // generic type assertion
const input = document.querySelector<HTMLInputElement>('#textField')!;   // non-null assertion
const app = document.querySelector('#app')!;


// 너가 지금 잡은 대상이 null 일 수 있어.
if(input){
  input.value
}

(input as HTMLInputElement).value;





const personA:{
  readonly name:string;
  readonly age:number;
} = {
  name:'tiger',
  age:30
}


// personA.name = 'sun';


// const 단언 
const personB = {
  name:'sun',
  age:35
} as const


// personB.name = 'tiger';

// personB = []