/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용


const first = getNode('.first');


console.log( first.className );
// console.log( first.className = '' );


console.log( first.classList );
console.log( first.classList.add('h1Tag') );
console.log( first.classList.remove('h1Tag') );
console.log( first.classList.toggle('toggle') );

/**
 * @function DOM Element에 클래스를 추가하는 함수
 * @param {HTMLElement | string} node
 * @param {string | string[] | object} className
 * @returns {void}
 */

function addClass(node,className){
  
  if(isString(node)) node = getNode(node);
  
  if(className.includes?.(',')){
    className = className.replace(/\s*/g,'').split(',')
  }
  
  if(isObject(className)){
    className = Object.values(className);
  }
  

  if(Array.isArray(className)){

    className.forEach((c)=> node.classList.add(c) );
    
  }else{
    
    node.classList.add(className)
  }


  
}


/**
 * @function DOM Element에 클래스를 제거하는 함수
 * @param {HTMLElement | string} node
 * @param {string} className 빈문자('') 입력시 모든 클래스 제거
 * @returns {void}
 */

function removeClass(node, className){
  if(isString(node)) node = getNode(node);
  if(!className) {
    // node.className = ''
    node.removeAttribute('class')
    return;
  }
  node.classList.remove(className);
}


/**
 * @function DOM Element에 클래스를 토글하는 함수
 * @param {HTMLElement | string} node
 * @param {string} className 
 * @returns {boolean} - 추가 true / 제거 false
 */
function toggleClass(node, className){
  if(isString(node)) node = getNode(node);
  return node.classList.toggle(className)
}



// addClass('.first','a')
// addClass('.first',['d','e','f'])
// addClass('.first','a-1,b-2,c-3')
addClass('.first',{a:'hello',b:'bye'})

// addClass('.first','h1Tag') 



/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`