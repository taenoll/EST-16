
let arr:number[] = [1.2,3];

// arr = [100, 1000, 'bello~'];

let str:string[] = 'a,b,c'.split(',');

//  str = [1,2,3]


/* array generic type */ 
let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = 'a,b,c'.split(',');


/* 유니온 타입 [union type] + [array type] */
let multi:(string | number | boolean)[] = ['hello', true, 10];

multi = [100,2000,1000];


// 자리 정하면 안 되나?
// 항목을 빼먹으면 안 되는 거 아닌가?
// 그럴때 쓰는 게 이것
/* tuple type */

let tupleA:[number, number, number] = [1,2,3]; 
// 구조분해랑 비슷하게 생겼다...

let tupleB: [string, number] = ['tiger', 30];

// tupleB = [100, 1000]; // ❌ 타입 오류

tupleB = ['lion', 100]; // ✅