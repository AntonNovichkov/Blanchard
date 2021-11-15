window.addEventListener('DOMContentLoaded', function() {
  let selector = document.querySelector("input[type='tel']");
  let myMask = new Inputmask("+7 (999)-999-99-99");
  myMask.mask(selector);

  let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        name: {
          required: 'Как вас зовут?',
          minLength: 'Слишком короткое имя!',
          maxLength: 'Слишком длинное имя',
        },
  
        tel: {
          required: 'Укажите ваш телефон',
          function: 'Недопустимый формат'
        },
      },
      colorWrong: '#ff0000',

      submitHandler: function(form) {
        let formData = new FormData(form);
  
        let xhr = new XMLHttpRequest(); 
  
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }
  
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
  
        form.reset();
      }
    });
  };
  
  validateForms('.contacts__form', {
    name: {
      required: true,
      minLength: 4,
      maxLength: 25
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  }, '.thanks-popup', 'send goal');
  //-----------------------------------------------------------------------------------
  
  //------------------перенос HTML-элемента (Яндекс карта)-----------------------------

  let screen600 = window.matchMedia('(max-width: 600px)');
  const address = document.querySelector('.contacts__address');
  const yaMap = document.querySelector('.contacts__map');

  if (document.documentElement.clientWidth <= 600) {
		address.insertAdjacentElement("afterend", yaMap );
	}

  screen600.addEventListener('change', function (el) {
    if (el.matches) {
      address.insertAdjacentElement("afterend", yaMap );
    } else {
      window.location.reload();
    }
  });
  //-----------------Яндекс Карта----------------------
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.759, 37.60],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15,
      controls: [],
                          // breakpoints: {
                          //   // when window width is >= 320px
                          //   // 320: {
                          //   //   slidesPerView: 2,
                          //   //   spaceBetween: 20
                          //   // },
                          //   // // when window width is >= 1024px
                          //   // 1024: {
                          //   //   slidesPerView: 2,
                          //   //   slidesPerColumn: 2,
                          //   //   spaceBetween: 34,
                          //   //   slidesPerGroup: 2,
                          //   // },
                          //   // // when window width is >= 768px
                          //   768: {
                              
                          //       // Координаты центра карты.
                          //       // Порядок по умолчанию: «широта, долгота».
                          //       // Чтобы не определять координаты центра карты вручную,
                          //       // воспользуйтесь инструментом Определение координат.
                          //       center: [55.75846306898368, 37.601079499999905],
                          //       // Уровень масштабирования. Допустимые значения:
                          //       // от 0 (весь мир) до 19.
                          //       zoom: 20,
                          //       controls: []   
                          //   }
                          // },
    });

    myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
        bottom: '350px',
        right: '10px'
      }
    });

    myMap.controls.add('geolocationControl', {
      float: 'none',
      position: {
        bottom: '315px',
        right: '10px'
      }
    });

    
  
        
    // Создание геообъекта с типом точка (метка).
    // var myGeoObject = new ymaps.GeoObject({
    //   geometry: {
    //     type: "Point", // тип геометрии - точка
    //     coordinates: [55.8, 37.8] // координаты точки
    //   }
    // });

    //кастомная метка на карте
    var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {},{
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/EllipseMap.svg',//сама метка
      iconImageSize: [20, 20], //размеры
      iconImageOffset: [-3. -42] //отступы
    })

    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }
  //-----------------------------------------------------------------
});
