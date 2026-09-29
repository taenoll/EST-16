/* ---------------- */
/* Condition        */
/* ---------------- */


// let value = prompt("자바스크립트의 '공식'이름은 무엇일까요?")

// if (value == ECMAScript) {
//   alert('정답입니다!');
// }else{
//     alert('아닙니다! 정답은 ECMAScript입니다!');
//   }








// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

function watchMovie(){
  let didWatchMovie = prompt('그 영화 봤니? [yes/no]');

if (didWatchMovie === 'yes') {
  alert('봤구나!');
} else if (didWatchMovie === 'no') {
  let goingToWatchMovie = prompt('그럼 그 영화 볼 거니? [yes/no]');

  if (goingToWatchMovie === 'yes') {
    alert('굿~');
  } else if (goingToWatchMovie === 'no') {
    alert('싫음 말어');
  } else {
    alert('그걸 물어본 게 아니야!');
  }
} else {
  alert('그걸 물어본 게 아니야!');
}

}





// 영화 볼거니?



// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// 간단한 삼항식

let result = didWatchMovie === 'yes' ? '봤구나!' : '안 봤구나!';

console.log(result);