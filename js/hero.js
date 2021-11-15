//---------------Swiper---------------
const mySwiper0 = new Swiper('.hero__swiper-container', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  crossfade: true,
  autoplay: {
    delay: 6000, //задержка
    waitForTransition: true
  },
});
//-------------------------------------