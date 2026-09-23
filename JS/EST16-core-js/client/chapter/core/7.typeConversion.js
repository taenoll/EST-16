/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2026;

// 명시적
console.log(String(YEAR));

// 암시적
console.log( YEAR + '');



// undefined, null
const days = null;
let undef;

// 명시적
console.log(String(days))
console.log(String(undef))



// 암시적

// boolean
const isClicked = false;

console.log(String(isClicked));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend));


// null
const money = null;

console.log(money * 1);
console.log(money / 1);
console.log(+money)


// boolean
let isActive = false;

console.log( isActive / 1 );


// string
let num = '100';

console.log(num * 1);


// numeric string
const width = '120.5px';

console.log(parseInt(width)); //정수로 해석한다. 뒤에 px를 없애줌
// ㄴ정수로 바꿔주므로 소수점 사라짐
console.log(parseFloat(width) + 10+ 'px'); // 이렇게 하면 소수점도 산다



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.clear();

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));


// 위에 나열한 것 이외의 것들 

console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(Boolean( !!(-1)) );
console.log(Boolean( !!({})) );
console.log(Boolean( !! (false)));