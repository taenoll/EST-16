/* ---------------- */
/* For In Loop      */
/* ---------------- */



const JS = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2026,
};

Object.prototype.nickName = 'ow wa';

console.log( 'creator' in JS );
// in 문: 객체 안에 뭐가 들었는지 간단하게 탐색할 때 사용

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 자바스크립트는 내가 가지고 있는 빌트인 속성, 메서드를 보로래주지 않는다.

// 객체 자신의 속성인지 확인하는 정확한 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 
// 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(JS.hasOwnProperty('nickname'));
// 빌려쓰기
console.log( Object.prototype.hasOwnProperty.call(JS, 'nickName') );

console.log( Object.hasOwn(JS, 'nickname') );



console.clear();
// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 객체 안의 내용을 반복함

// for..in문은 객체의 key,value를 반복 처리할 때 사용 가능함.
// 그러나 그냥 조회를 하면 조상의 값까지 조회가 된다. => 위헙
// for..in을 쓰지만 내부적으로 hasOwn을 같이 써서 안정하게 정말 내가 가지고 있는 값만
// 조회가 될 수 있도록 한다.

for(const key in JS){

  if(Object.hasOwn(JS,key)){

    const value = JS[key];
    // safe zone
    console.log(key, value);
  }

}
console.clear();



// - 배열 객체 순환에 사용할 경우?

// for...in은 객체, 배열 둘 다 순환이 가능하다.
// 하지만 배열의 순환은 위험하다.
// 배열에서 가장 중요한 건 순서(index)인데, for..in은 그 순서를 보장해주지 않는다.
// 따라서 객체에서만 써주는 게 좋다.

const tens = [10,100,1000,10_000];

for(const key in tens){

  console.logO(tens[key]);
}


