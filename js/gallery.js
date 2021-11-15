//-----------------------Модальные Окна----------------------
const modal = new GraphModal();
//-----------------------------------------------------------

//---------------Селект---------------
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false
})
//------------------------------------

//---------------Swiper---------------
const mySwiper1 = new Swiper('.gallery__swiper-container', {
  // Optional parameters
  // loop: true,
  resizeObserver: true,
  speed: 700,
  autoplay: {
    delay: 7000, //задержка
    disableOnInteraction: false, //после взаимодействия с пользователем продолжение автовоспроизведения
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 601px
    601: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
    },
    // // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--right',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn--next',
    prevEl: '.swiper-btn--prev',
  },
});