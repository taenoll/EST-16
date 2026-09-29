/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime DINNER;



/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console,log('눈비비기 아침 먹기')
    break;

  case LUNCH :
    console.log('한숨 자고 청소기 돌리고 밥 먹기')
    break;

  case DINNER:
    console.log('수업 내용 복습하기')
    break;
  
  case LATE_NIGHT:
    console.log('게임하기')
    break;
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console,log('눈비비기 아침 먹기')
    break;

  case LUNCH :
    console.log('한숨 자고 청소기 돌리고 밥 먹기')
    break;

  case DINNER:
    console.log('수업 내용 복습하기')
    break;
  
  case LATE_NIGHT:
    console.log('게임하기')
    break;
}


/* switch vs. if -------------------------------------------------------- */

// prompt를 통해서 숫자를 입력받는다. (0~6 까지)
// 받은 숫자를 사용해서 switch case 사용해주세요.

/*

0 : 일
1 : 월
2 : 화
3 : 수
4 : 목
5 : 금
6 : 토

*/

// 함수는 하나의 기능만을 수행하는 것을 목표로 합니다.
// 람수는 재사용성이 좋아야 하기 때문에 하나의 기능을 수행하는 게 좋다.


function getRandom(n) {
   const dayNumber = Math.floor(Math.random() * n);

   return dayNumber;
}



// function getDay() {

//   const dayNumber = getRandom(7);

//   switch (dayNumber) {
//     case 0:alert('일'); break;
//     case 1: alert('월'); break;
//     case 2: alert('화'); break;
//     case 3: alert('수'); break;
//     case 4: alert('목'); break;
//     case 5: alert('금'); break;
//     case 6: alert('토'); break;
//   }
// }


function getDay() {

  const dayNumber = getRandom(7);

  switch (dayNumber) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}

function weekend() {
  const today = getDay();

  // if (day === '토' || day === '일') {
  //   return `오늘은 ${today}요일입니다. 그러므로 주말입니다.`;
  // } else {
  //   return `오늘은 ${today}요일입니다. 그러므로 평일입니다.`;
  // }
  return today.includes('토') || today.includes('일') ?
                `오늘은 ${today}요일입니다. 그러므로 주말입니다.` :
                `오늘은 ${today}요일입니다. 그러므로 평일입니다.` 

}

console.log(weekend());
