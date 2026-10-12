
function earth() {
  let water = true;
  let gravity = 10;

  function tiger(data) {
    gravity = data;
    return gravity;
  }

  return tiger;
}

const UFO = earth();

UFO(100);




// 나 완전히 이해함 근데 이제 어디다 써?

const button = document.querySelector('button');

let isClicked = false;

function handleClick() {
  if (!isClicked) {
    document.body.style.background = 'orange';
  } else {
    document.body.style.background = '';
  }

  isClicked = !isClicked;
}

button.addEventListener('click', handleClick);






function state(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}
