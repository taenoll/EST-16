/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef);
console.log(typeof typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let single = 'hello';
let double = 'tiger';
let backtick = `hi ${double}`; // string literal 방식

const str = new String('hello'); // string constructor function 방식 (잘 안 쓴다)




console.log(`asd"ads"asdf`);
console.log(backtick);

console.clear();

// 4. 정수, 부동 소수점 숫자(길이 제약)
const intger = 150;
const floatingPointNumber = 1.23;

const num = new Number(123);




console.log(typeof intger);
console.log(typeof floatingPointNumber);



// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;
console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;
console.log(isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {};
console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
const key1 = Symbol('uuid');
const key2 = Symbol('uuid');
// 보통 암호화할 때 uuid 많이 씀
// 안에 들어있는 값이 같아도 다르다고 함

const a = 'hello';
const b = 'hello';
//이건 같다고 뜸

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류


// 객체 안에 함수를 넣는다 => 메서드

// Object

const user = {
	name : 'tiger', //name=key 'tiger'=value , 이걸 다 통틀어서 property(속성)
	age: 30,
  sayHi:function(){
    return 'hellooooow'
  }
}

// Array
const arr = [function(){},{name:'tiger'},[1,2,3],4,'hello'];

const _arr = new Array();

// function

function c(a,b){

  return(a + b * 3);

}

const result = c(1, 2);

// 함수를 만드는 이유 : 재사용성을 높이기 위해

function 붕어빵틀(재료){
  return `따끈하고 맛있는 ${재료}붕어빵 완성됐습니다~~`
}




// this