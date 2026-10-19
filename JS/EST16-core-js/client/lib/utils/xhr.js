
// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete



const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// setTimeout(() => {
// console.log(xhr.response);

// }, 1000);



xhr.send();