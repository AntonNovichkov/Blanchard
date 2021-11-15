//----------------------------SWIPER-----------------------------------
const swiper = document.querySelector('.categories__swiper-container');
let mySwiper3;

function notmobileSlider() {
  if(window.innerWidth > 600 && swiper.dataset.notmobile == 'false') {
    mySwiper3 = new Swiper('.categories__swiper-container', {
      // Optional parameters
      resizeObserver: true,
      grabCursor: true,
      speed: 1000,                  
      autoplay: {
        delay: 3000, //задержка
        disableOnInteraction: false, //после взаимодействия с пользователем продолжение автовоспроизведения
      },
      
      breakpoints: {
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
          slidesPerGroup: 1,
        },
        // // when window width is >= 1400px
        1400: {
          slidesPerView: 3, // or 'auto'
          slidesPerColumn: 1,
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
    swiper.dataset.notmobile = 'true';
  }

  if(window.innerWidth <= 600) {
    swiper.dataset.notmobile = 'false';
    if(swiper.classList.contains('swiper-container-initialized')) {
      mySwiper3.destroy();
    }
  }
}

notmobileSlider()
window.addEventListener('resize', () => {
  notmobileSlider();
});

//=================== форма чекбоксов <=600 =============================
function checkBox() {
  let categoryBtn = document.querySelector('.categories__button');
  let categoryLabels = document.querySelectorAll('.categories__label');

  categoryLabels.forEach(function(label){
    label.classList.add('categories__label-no-active');
  });

  categoryBtn.addEventListener('click', function() {
    this.classList.toggle('categories__button-is-active');
    categoryLabels.forEach(function(label){
      label.classList.toggle('categories__label-no-active');
    });
  });

  let checkBoxs = document.querySelectorAll('.categories__checkbox');
  checkBoxs.forEach(function(checkMark) {
    checkMark.addEventListener('change', function() {
      if (checkMark.checked) {
        checkMark.parentNode.classList.add('categories__label-is-active');
      }else {
        checkMark.parentNode.classList.remove('categories__label-is-active');
      };
    });
  });

  // рабочая схема, но с недостатками---------------------------------------------
  // let form = document.querySelector('.categories__form1');
  // form.addEventListener('click', function(event) {
  //   let check = event.target;
  //   check.classList.toggle('categories__label-is-active');
  // }); 
};

checkBox();
//========================================================================