import { Pokemon } from "./type";



const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';



async function fetchData(url:string):Promise<Pokemon>{
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


fetchData(END_POINT);



type User = { name: string; age: number; }

type Options = {
  timeout: number;
  condition: boolean;
  data: User[];
}

// satisfies: 객체가 특정 타입의 조건을 만족하는지 검사함 (객체 자체의 타입 추론은 최대한 유지함)

const defaultOptions = {
  timeout: 1000,
  condition: false,
  data: [
    {name:'tiger',age:30},
  ],
} satisfies Options



function delayP(options:Partial<Options> = {}):Promise<User[]>{
  
  const {timeout, condition, data} = {...defaultOptions,...options};
  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      
      if(condition) resolve(data);
      else reject(new Error('..error!.'))

    }, timeout);

  })
}


delayP({
  timeout:3000,
})
.then((res)=>{
  res.forEach((user)=>{
    user.age
  })
})






async function getUser() {
  return {
    id: 1,
    name: 'tiger',
    age: 30
  };
}

// getUser();

type UserAsync = Awaited<typeof getUser>;

type UserAsyncReturnType = Awaited<ReturnType<typeof getUser>>;