let btn = document.querySelector('#event_btn');
btn.addEventListener('click', function(event){
  document.querySelectorAll('.events__card').forEach(function(elem){
    elem.classList.add('events-is-active');
  });
  this.classList.add('no-active');
});


//----------------------------SWIPER-----------------------------------
const slider = document.querySelector('.events__swiper-container');
let mySwiper2;

function mobileSlider() {
  if(window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
    mySwiper2 = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: 'events__card',
      pagination: {
        el: '.events__swiper-pagination',
        clickable: true,
      },
    });
    slider.dataset.mobile = 'true';
  }

  if(window.innerWidth > 600) {
    slider.dataset.mobile = 'false';
    if(slider.classList.contains('swiper-container-initialized')) {
      mySwiper2.destroy();
    }
  }
}

mobileSlider()
window.addEventListener('resize', () => {
  mobileSlider();
});