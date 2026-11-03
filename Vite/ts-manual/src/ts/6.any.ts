
/* any type */
// 사용을 지양하자

let obj: any;

obj = 1;
obj = '1';
obj = 1 * 10;
obj = [1, 2, 3];
obj = () => {};
obj.toUpperCase();
obj.toFixed();
obj.includes();


/* unknown type */ 
// any를 써야 하는 상황이 온다면 차라리 unknown을 쓰자

let arr: unknown;

arr = 1;

// 타입 좁히기 (Narrowing)
if (typeof arr === 'number') {
  arr.toFixed(); // ✅
}


/*
  any vs unknown

  any: 타입 검사를 포기하는 타입
  - 어떤 값이든 저장하고 사용할 수 있다.
  - 타입 확인 없이 메서드나 속성에 접근할 수 있다.
  - 잘못된 코드도 타입 오류 없이 통과할 수 있어 위험하다.
  - 비유: "그냥 운전해. 책임은 네가 져."

  unknown: 타입을 아직 알 수 없는 상태를 표현하는 타입
  - 어떤 값이든 저장할 수 있다.
  - 타입이 확인되지 않으면 함부로 사용할 수 없다.
  - typeof 등을 이용해 타입을 좁힌 후 안전하게 사용한다.
  - 비유: "운전하기 전에 면허부터 증명해."

  핵심:
  any는 타입 검사를 우회하고,
  unknown은 타입 검사를 유지한다.

  따라서 타입을 모를 때는 any보다 unknown을 우선 고려한다.
*/