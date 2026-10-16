/* eslint-disable no-useless-assignment */

const content = document.querySelector('.contents');

function handleClick(e) {
  e.preventDefault();

  let target = e.target;

  while(target.getAttribute('data-name')){

    target = target.parentElement;

    if(target.tagName === 'BODY'){
      target = null;
      return;
    }
  }

  console.log(target);

}

content.addEventListener('click', handleClick);