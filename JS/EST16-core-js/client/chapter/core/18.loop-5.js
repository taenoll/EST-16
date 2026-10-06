/* --------------- */
/* For Of Loop     */
/* --------------- */

// enumerable => 열거 가능한 
// iterable   => 반복 가능한
// mutable    => 변형 가능한
// immutable  => 변형 할 수 없는


// for...of 배열에서 쓸 수 있는 반복문 x
// for...of iterable한 요소에 사용할 수 있는 반복문

// 보통 배열이란?
// 인덱스를 가지고 있다.
// 구분 길이(length)가 있다.




//  좀 복잡하게 보이지만 얘는 배열임
const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];


// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기

for(const value of languages){

  const name = value.name;

  if(name.includes('Java') && name.length < 5 ) continue;

  console.log(value);


}









const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

console.clear();



const obj = {
  nickName: 'tiger',
  age: 30,
};


// 객체 순환 for...in을 써야함...
// 문제가 있음 - 조상의 아이템
// hasOwn... 사용하면 해결이 됨..
// for...of는 그렇게 필요 없음..
// for...of를 쓰려면 iterable한 요소여야 사용이 가능함..
// 그럼 객체를 배열로 바꿔버림!!!!!!!!


// Object.keys()

const keys = Object.keys(obj); // 객체의 key들을 모아 새로운 배열로 반환하는 유틸 함수

// ['nickName', 'age']
// console.log(keys);

// Object.keys()의 반환값은 배열이므로
// iterable → for...of 사용 가능
for (const key of keys) {
  console.log(key);
}

const values = Object.values(obj); // 객체의 value들을 모아 새로운 배열을 반환
// ['tiger', 30]

for (const value of values) {
  console.log(value);
}

// Object.entries()
// 객체의 key와 value를 [key, value] 형태의 한 쌍 배열로 묶어서
// 새로운 배열로 반환
const entries = Object.entries(obj);
// [ ['nickName', 'tiger'], ['age', 30] ]

console.log(entries);


// entries를 for...of로 순환하기
for (const [key, value] of entries) {
  console.log(key, value)
  // const key = keyValue[0];
  // const value = keyValue[1];

  console.log(key, value);
}

console.clear();

// 점수가 80점 이상인 과목만 콘솔창에 출력

const scores = {
  html: 90,
  css: 75,
  javascript: 85,
  react: 60,
};

Object.entries(scores)

for (const [subject, score] of Object.entries(scores)) {
  if (score >= 80) {
    // console.log(subject, score);
  }
}


// 객체의 키, 값 순환
// - for ~ in 문 
/*
for (const key in randomUser) {
  if (Object.hasOwn(randomUser, key)) {
    const L1 = randomUser[key];
    console.log(L1);

    if (typeof L1 === 'object') {
      for (const key in L1) {
        if (Object.hasOwn(L1, key)) {
          const L2 = L1[key];

          console.log('\t', L2);

          if (typeof L2 === 'object') {
            for (const key in L2) {
              if (Object.hasOwn(L2, key)) {
                const L3 = L2[key];

                console.log('\t\t', L3);
              }
            }
          }
        }
      }
    }
  }
}
*/

// - for ~ of 문 
for(const keyValue of Object.entries(randomUser)){
  
}

// - 성능 비교 판단