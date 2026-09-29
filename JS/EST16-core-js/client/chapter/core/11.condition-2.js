/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log( AandB );

// 논리곱 할당 연산자
// a &&= b;
// a = a && b ;


// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// 논리합 할당 연산자
// a ||= b;


// 부정 연산자
let reverseValue = !!value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};



// 실습

console.clear();

function logIn() {
  const userName = prompt("사용자 이름을 입력해주세요.", '');

  // 취소 / 빈 문자열 / 공백만 입력
  if (userName === null || userName.replace(/\s+/g, '') === '') {
    alert('취소되었습니다.');
    return;
  }

  // 대소문자 구분 없이 Admin 확인
  if (userName.replace(/\s+/g, '').toLowerCase() === 'admin') {
    console.log('admin');

    const password = prompt('비밀번호:', '');

    // 취소 / 빈 문자열 / 공백만 입력
    if (password === null || password.replace(/\s+/g, '') === '') {
      alert('취소되었습니다.');
      return;
    }

    // 대소문자 구분 없이 TheMaster 확인
    if (password.replace(/\s+/g, '').toLowerCase() === 'themaster') {
      alert('환영합니다!');
    } else {
      alert('틀린 비밀번호. 인증에 실패하였습니다.');
    }

  } else {
    console.log('인증되지 않음');
    alert('인증되지 않은 사용자입니다.');
  }
}



