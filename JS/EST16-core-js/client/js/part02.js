/* eslint-disable no-undef */



const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

// JQuery
// 1. 이상하게 말해도 잘 알아듣는 유연함이 있으나 그 때문에 너무 무거움
// 2. vanilla JS가 jQuery처럼 문법이 쉬워지면서 사용자가 줄고 있긴 하지만
//    지금도 사용자가 꽤 된다.
// 3. SPA (Single Page Application) 지원 안됨.
// 4. ajax => XMLHttpRequest / fetch API

// 이벤트 위임 / 모든 요소에 이벤트 바인딩


// $('.navigation > li').click(function (e) {
//   e.preventDefault();

//   const index = $(this).index();

//   $('.navigation > li').removeClass('is-active');

//   $(this).addClass('is-active');

//   $('.visual img').attr({
//     src: `./assets/part01/${data[index].src}`,
//     alt: data[index].alt,
//   });
// });

$('.navigation').on('click', 'li', function (e) {
  e.preventDefault();

  const index = $(this).attr('data-index');

  $('.navigation > li').removeClass('is-active');

  $(this).addClass('is-active');

  $('visual img')
  .stop(true, true)
  .fadeOut(300, function(){
    
    $(this)
      .attr({
        src: `./assets/part01/${data[index - 1].src}`,
        alt: data[index - 1].alt,
      })
      .fadeIn(300);
      
  })


  // $('.visual img').attr({
  //   src: `./assets/part01/${data[index - 1].src}`,
  //   alt: data[index - 1].alt,
  // });

});
















