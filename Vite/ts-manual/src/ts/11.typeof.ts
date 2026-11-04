/*
typeof는 기존 변수나 객체의 타입을 가져오는 타입 연산자 입니다. JS의 typeof !== TS typeof;

이미 만들어진 값의 타입을 그대로 복사해서 새로운 타입을 만드는 기능

*/

const user = {
  name: 'tiger',
  age: 30,
  gender: 'male',
  address: '남양주시 별내동'
};

type User = typeof user;

/* keyof는 타입의 key만을 모아 새로운 타입을 만듦 */
type UserKey = keyof User;

type UserValue = User[UserKey];

type UserType = keyof typeof user