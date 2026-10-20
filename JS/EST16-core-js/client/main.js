/* eslint-disable no-undef */


import { renderUserCard, renderSpinner, renderEmptyCard } from './lib/dom/userList.js';
import { changeColor, delayP, getNode, insertLast, tiger } from './lib/index.js';




const END_POINT = 'https://6ad6f74df71f154ac487884a.mockapi.io/user';

const userCardInner = getNode('.user-card-inner');

async function renderUserList(){

  renderSpinner(userCardInner);
  
  try{

    const response = await tiger.get(END_POINT);
    // const response = await fetch(END_POINT);
    const data = response.data;

    await delayP(1000);

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        this._targets[0].remove();
      }
    })




    // data를 가지고 유저의 목록을 article로 화면에(.userCardInner) 랜더링 
    data.forEach((user)=> renderUserCard(userCardInner,user))
    
    changeColor('.user-card');

    gsap.from('.user-card',{
      x:-100,
      opacity:0,
      stagger:{
        each:0.1,
        from:'start'
      }
    })
  }
  catch{

    renderEmptyCard(userCardInner)
    //

  }




}


renderUserList();





function handleDeleteCard(e){

  const button = e.target.closest('button');

  if(!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${index}`)
  

}




userCardInner.addEventListener('click',handleDeleteCard);




const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');
const nameField = getNode('#nameField');


