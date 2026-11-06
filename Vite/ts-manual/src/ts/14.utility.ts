

/* Omit<T,K> (생략) <타입, 키> */

type User = {
  id:number;
  name:string;
  email:string;
  address:string;
  isPaid:boolean;
}



// 지정한 속성을 제외
type PublicUser = Omit<User,'email'>;


/* Pick<T,K> */

// 지정한 속성만 선택
type PickUser = Pick<User,'id'|'address'>;



const user2: Pick<User,'id'|'name'> = {
  id:2,
  name:'beom'
}



type UserData = {
  id: number;
  name: string;
  email: string;
  address: {
    lat: number;
    long: number;
  };
};

/* partial<T>*/
// 모든 최상위 속성을 선택적으로 변경
const user3: Partial<UserData> = {
  name: 'tiger'
};













