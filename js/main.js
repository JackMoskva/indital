$(document).ready(function () {
  $('.nav-link-collapse').on('click', function () {
    $('.nav-link-collapse').not(this).removeClass('nav-link-show');
    $(this).toggleClass('nav-link-show');
  });
});

// let verticalMenu = document.querySelector('.navbar-nav'),
//   items = verticalMenu.querySelectorAll('.nav-link');

// verticalMenu.onclick = function (e) {
//   for (let i = 0; i < items.length; i++) {
//     items[i].classList.remove('active');
//   }
//   e.target.classList.add('active');
// };

// window.addEventListener('scroll', () => {
//   let scrollDistance = window.scrollY;

//   document.querySelectorAll('.card').forEach((el, i) => { // Находим все секции в вашем случаи заголовки
//     if (el.offsetTop - document.querySelector('.card-header').clientHeight <= scrollDistance) { // Отнимаем высоту хедера
//       document.querySelectorAll('.nav-link').forEach((el) => {
//         if (el.classList.contains('active')) {
//           el.classList.remove('active');
//         }
//       });

//       document.querySelectorAll('.nav-link')[i].classList.add('active');
//     }
//   });
// });

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  document.querySelectorAll('.card').forEach((el, i) => { // Находим все секции или заголовки
    if (el.offsetTop <= scrollDistance) {
      document.querySelectorAll('.nav-link-main').forEach((el) => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });

      document.querySelectorAll('.nav-link-main')[i].classList.add('active');
    }
  });
});

$(function () {
  // при нажатии на кнопку scrollup
  $('.scroll-up').click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $('.scroll-up').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scroll-up').fadeOut();
  }
});

$(document).ready(function () {
  $("body").on("click", ".smooth", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});
