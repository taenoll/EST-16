const arr =  [1,2,3];

const newArray = arr.map((item,index)=> item * index);

// map, forEach, filter, reduce

type Map = <T,U>(arr:T[],f:(n:T)=>U) => U[];


const map:Map = (arr,f)=> {
  let result = [];

  for(const a of arr){
    result.push(f(a))
  }

  return result;
}


map(arr,(a)=> a * 2) // [2,4,8];




type Callback<T> = (a: T, i: number) => void;
type ForEach = <T>(arr: T[], f: Callback<T>) => void;

const forEach: ForEach = (arr, f) => {
  let i = 0;

  for (const a of arr) {
    f(a, i++);
  }
};

forEach(arr, (a, i) => console.log(a));




const filter = <T>( arr: T[], f: (a: T, i: number) => boolean ): T[] => {
  const result: T[] = [];
  let i = 0;

  for (const a of arr) {
    if (f(a, i++)) result.push(a);
  }

  return result;
};





const reduce = <T, U>( arr: T[], f: (acc: U, a: T, i: number) 
  => U, initial: U ): U => {
  let acc = initial;
  let i = 0;

  for (const a of arr) {
    acc = f(acc, a, i++);
  }

  return acc;
};