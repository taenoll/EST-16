
// number, string, boolean, null, undefined

/* number type */ 

// 타입 추론 : type inference   /  Explicit Type Annotation
let num1: number = 10;       // 정수
let num2: number = 3.14;     // 실수
let num3: number = NaN;
let num4: number = Infinity;
let num5: number = -Infinity;

num1 = 123123;


/* string type */

let str1:string = 'hi';
let str2:string = "bello";
let str3:string = `bello ${null}`;

str1 = 'bello world'


/* boolean */ 

let bool1: boolean = true;
let bool2: boolean = false;

bool1 = Boolean('1'); // true

/* null type */
let nullA: null = null;

/* undefined type */
let undef = undefined;


/* literal type */

let numA:10 = 10;
const numB = 10; // 사실상 이거랑 비슷함

// numA = 20; // ❌ 오류

let strA: 'hello' = 'hello';
let boolA: true = true;


/* unknown type */ 

let unknown:unknown;


/* never type */

let never:never;

