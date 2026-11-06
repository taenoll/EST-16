import { Pokemon } from "./type";


const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';


// fetchData 함수를 만들고 비동기 통신을 위한 재사용 가능한 제네릭 타입을 지정해주세요


async function fetchData<T>(url:string):Promise<T>{
  const response = await fetch(url);
  if(!response.ok) throw new Error(`HTTP ${response.status} : ${url}`);
  return response.json();
}




// Pokemon 데이터를 PokemonCard(타입 정의 필요: id, name, image)로 
// 변환하는 toCard 함수를 만들어주세요

type PokemonCard = {
  id:number,
  name:string,
  image:string
}

function toCard({id, name, sprites}:Pick<Pokemon,'id'|'name'|'sprites'>):PokemonCard{

  return {
    id,
    name,
    image: sprites.front_default ?? ''
  }
}

// PokemonCard를 받아서 HTML 문자열을 반환하는 함수를 만들어주세요.

function createCard({id, name, image}:PokemonCard):string{
  
  return `
    <div class="card" data-id="${id}">
      <img src="${image}" alt="${name}">
      <h2>${name}</h2>
    </div>
  `
}

function renderCard(target:HTMLElement | null ,cards:PokemonCard[]):void{
  if(!target) return;
  target.insertAdjacentHTML('beforeend',cards.map(createCard).join(''));
}

fetchData<Pokemon>(`${BASE_URL}/25`)
.then((p)=>{

  // 카드 랜더링 
  renderCard(document.querySelector<HTMLElement>('#app'), [toCard(p),toCard(p),toCard(p)])
  
  
})




function fetchPokemon(count: number): Promise<Pokemon>[] {
  return Array.from({ length: count }, (_, i) =>
    fetchData<Pokemon>(`${BASE_URL}/${i + 1}`)
  );
}

const promise = fetchPokemon(10);

Promise.all(promise).then((list) => {
  console.log(list);
});



