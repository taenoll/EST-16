
/* void type */

// 문자열을 반환하는 함수
function sayHi(message: string): string {
  return message + '⚡';
}

// 반환값이 없는 함수
function printHi(): void {
  console.log('hello');
}

printHi();




/* never type */

function showError(message: string): never {
  throw new Error(message);
}

showError('알 수 없는 오류가 발생했습니다!');


function loop(): never {
  while (true) {

  }
}


// lazy loop
// generator function
function* gen(): Generator<number, void, void> {
  let count = 0;

  while (true) {
    yield ++count;
  }
}

/*
  Generator<Yield, Return, Next>

  1. number: yield로 내보내는 값의 타입
  2. void: 함수가 최종적으로 return하는 값의 타입
  3. void: next()에 전달하는 값의 타입
*/

const obj = gen();





