//---------------Swiper---------------
const mySwiper4 = new Swiper('.projects__swiper-container', {
  // Optional parameters
  resizeObserver: true,
  speed: 600,
                              // slidesPerView: 3, // or 'auto'
                              // slidesPerColumn: 1,
                              // spaceBetween: 50,
                              // slidesPerGroup: 3,
  autoplay: {
    delay: 5000, //задержка
    disableOnInteraction: false, //после взаимодействия с пользователем продолжение автовоспроизведения
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1, // or 'auto'
      slidesPerColumn: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2, // or 'auto'
      slidesPerColumn: 1,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    // // when window width is >= 850px
    850: {
      slidesPerView: 2, // or 'auto'
      slidesPerColumn: 1,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    // // when window width is >= 1025px
    1025: {
      slidesPerView: 3, // or 'auto'
      slidesPerColumn: 1,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
});
//----------------tippy------------------------
tippy('#typpy1', {
  content: 'Пример современных тенденций - современная методология разработки',
});

tippy('#typpy2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('#typpy3', {
  content: 'В стремлении повысить качество',
});
  
// tippy('.myButton2', {
//   content: 'Тут тоже есть текст',
//   trigger: 'click',
// });
//-----------------------------------------------------