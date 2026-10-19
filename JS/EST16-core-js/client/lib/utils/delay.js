import { getNode } from '../dom/index.js';

function delay(callback, timeout = 500) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

delay(() => {
  second.style.top = '-100px';
  delay(() => {
    second.style.transform = 'rotate(360deg)';
    delay(() => {
      second.style.top = '0px';
    });
  });
});



const shouldRejected = false;

const p = new Promise((resolve, reject) => {
  if (!shouldRejected) {
    resolve('성공입니다!');
  } else {
    reject({ message: '알 수 없는 오류' });
  }
});

p.then((res)=>{
  console.log( res );
  
})
.then((res)=>{
  console.log( res );
  
})
 // promise object



console.log(  );






function delayP(timeout = 1000) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) resolve('성공');
      else reject({ message: '실패' });
    }, timeout);
  });
}


delay(() => {
  second.style.top = '-100px';
  delay(() => {
    second.style.transform = 'rotate(360deg)';
    delay(() => {
      second.style.top = '0px';
    });
  });
});


delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP();
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP();
})
.then(()=>{
  first.style.top = '0';
  
})