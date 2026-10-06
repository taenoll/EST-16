/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */




function getRandomValue(){
  return Math.random
}


// 함수 선언
function calcPrice(
  priceA,
  priceB = getRandomValue(),
  priceC = getRandomValue(),
) {
  // if(priceC === undefined) priceC = 0;
  // if(!priceC) priceC = 0;
  // priceC = priceC || 0;
  // priceC ||= 0;
  // priceC = priceC ?? 0;
  // priceC ??= 0;

  if (!priceA) {
    throw new Error('calcPrice 함수의 첫 번째 인자는 필수 입력 항목입니다.');
  }

  return priceA + priceB + priceC;
}

// 함수 호출
const total = calcPrice(1,1,1);

console.log(total);


// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number): string
function rem(pxValue, base = 16) {
  if (!pxValue) {
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력값 입니다.');
  }

  if (typeof pxValue === 'string') {
    pxValue = parseInt(pxValue, 10);
  }

  return pxValue / base + 'rem';
}

console.assert(rem('30px') === '1.875rem');

// rem('30px', 0);






// css(node: string, prop: string, value: number|strung) : string;

const first = document.querySelector('.first');


// 모듈화 / encapsulation 캡슐화

const css = (function () {
  function getCss(node, prop) {

    if(typeof node === 'string'){
      node = document.querySelector(node);
    }

    return getComputedStyle(node)[prop];

  }

  // console.log(getCss(first, 'font-size'));// '32px'


  // 값을 세팅할 수 있는
  function setCss(node, prop, value) {
    if (typeof node === 'string') {
      node = document.querySelector(node);
    }

    if (!(prop in document.body.style)) {
      throw new Error(
        'setCss 함수의 두 번째 인수는 유효한 css속성이어야 합니다.'
      );
    }

    if (!value) {
      throw new Error(
        'setCss 함수의 세 번째 인수는 필수 입력 값 입니다.'
      );
    }

    node.style[prop] = value;
  }

  setCss(first, 'color', 'orange');

  // 이제 이걸 다 갖다쓰는 걸 만들겠다.

  function css(node, prop, value) {
    if (value === undefined) {
      return getCss(node, prop);
    }

    setCss(node, prop, value);
  }
  return css;
})();


console.log(css);
