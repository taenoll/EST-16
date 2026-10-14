/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


const section = getNode('section')
const article = getNode('article')
const p = getNode('p')

/* 버블링 ----------------------------------------------------------------- */




section.addEventListener('click', (e) => {
  console.log(e.target, e.currentTarget, this);
});

// article.addEventListener('click',()=>{
//   console.log('article clicked');
// })

// p.addEventListener('click',()=>{
//   console.log('p clicked');
// })


section.addEventListener('mouseenter')


/* 캡처링 ----------------------------------------------------------------- */