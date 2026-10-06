/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식

let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 전달 인수들의 유사 배열 객체
  console.log(arguments); // 드디어 나왔다!! 배열의 기능을 할 수 있지만 사실 객체인 녀석

  let total = 0;

  // for (let i = 0; i < arguments.length; i++) {
  //   // total = total + arguments[i];
  //   total += arguments[i];
  // }

  // return total;


  // for...of를 사용해서 모든 값의 합을 return 시켜주세요.
  // for...of를 사용해 전달된 인수의 값을 하나씩 순회
  // for (const value of arguments) {
  //   total += value;
  // }

  // return total;


  // 배열의 메서드 => forEach(값을 내보낼 수 없음), reduce(값을 내보냄)
  // 유사배열을 진짜 배열로 만들면 되는 거 아닌가?
  // const arr = Array.prototype.slice.call(arguments); //정파
  // const arr = Array.from(arguments); // 사파

  // 배열을 만들 수 있는 또 다른 방법...
  const arr = [...arguments] // spread operator 전개 연산자


  // arr.forEach(function(value, index){

  //   console.log(value);
    
  // })

  //  return total;

// reduce는 초깃값을 설정하지 않으면 배열의 첫 번째 값을 acc에 할당합니다.
  Array.reduce(function(acc,current){

    acc + current;

    console.log('acc : ', acc);
    console.log('current : ', current);
  },0)
     

  

};



const result = calculateTotal(10000,23500,38400,18400,19900,29800,9900);

console.log(result);




// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {
};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {
};


// 콜백 함수 (표현)식
let cb = function(condition, success, fail){

  if(condition) success()
    else fail()

};

cb(
  true,
  function(){
    console.log('성공입니다.');
  },
  function(){
    console.log('실패입니다.');
  }
)


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;



// encapsulation 캡슐화
// 클로저 closure 패쇄

const master = (function(){

  // var a = 10;

  let uuid = 'asdf@!$#@$$adf'

  return{
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value;
    }
  }
}())

console.log(master);
