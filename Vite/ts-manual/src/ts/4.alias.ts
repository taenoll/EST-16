/* alias : 별칭 */

// type, interface

type User1 = {
  id: number;
  name: string;
  age: number;
  isPaid: boolean;
  // address?: string;
};

type User2 = {
  address:string;
}

// type은 이름이 중복되면 안 된다.
// 객체 mixin과 비슷하다 => Object.assign(), {...A, ...B}
type UserA = User1 & User2;

const user1: User1 = {
  id: 1,
  name: 'tiger',
  age: 30,
  isPaid: true
};

const user2: User1 & {address:string} = {
  id: 2,
  name: 'sun',
  age: 41,
  isPaid: false,
  address: '남양주시 별내동'
};


interface User3{
  id: number;
  name: string;
  age: number;
  isPaid: boolean;
  
}

interface User3{
  address: string;
}


interface User4 extends User3 {
  address: string;
}



const user3:User3 & {address: string;}= {
  id: 3,
  name: 'beom',
  age: 33,
  isPaid: true,
  address: '의정부시 민락동'
};


// 그레서 뭘 더 많이 쓰는가?
// 사바사 케바케 회바회 
// 객체를 정의 -> interface & 라이브러리 
// 그외 -> type  react 


/* 함수 타입 정의 */

type fn = (a: number, b: number) => void;

interface _Fn {
  (a: number, b: number): void;
}


/* 객체 타입 정의 */
/* index signature 인덱스 시그니처 */

type Person = {
  name: string;
  age: number;
  email: string;
  [key: string]: string | number | 'tiger';
};

const person: Person = {
  name: 'kindtiger',
  age: 30,
  email: 'tiger@gmail.com',
  gender: 'male',
  phone: 123123,
  address: 'tiger'
};