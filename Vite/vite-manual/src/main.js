
// static assets import (정적)
import visual from '/src/assets/visual.jpg'


const template = `
  <div>
    <h2> hello vite! </h2>
    <p> 최고의 번들링 도구인 vite를 사용해보세요! </p>
    <img width="300" src="${visual}" alt=""/>
  </div>

`


document.body.insertAdjacentHTML('beforeend', template);