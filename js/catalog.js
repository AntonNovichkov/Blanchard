window.addEventListener('DOMContentLoaded', function() {
  //-----------------------------------табы Флаги----------------------------------------------------------
  let countryBtns =  document.querySelectorAll('.country__button');

  countryBtns.forEach(function(tabsBtn) { //табы ("флаги стран")  
    tabsBtn.addEventListener('click', function(event) {
      countryBtns.forEach(function(border){ //для всех кнопок-"флажков"
        border.classList.remove('country__button-is-active'); //удаление бордера увсех кнопок-"флажков"
      });
      this.classList.add('country__button-is-active'); //бордер на нажатую кнопку-"флажок"

      const path = event.currentTarget.dataset.flagBtn;
      document.querySelectorAll('.catalog__tabs').forEach(function(catalogTabs){
        catalogTabs.classList.remove('catalog__tabs-is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tabs-is-active');
      

      
      document.querySelectorAll('.catalog__biography').forEach(function(biography){ // при выборе страны удаляем активность со всех "биографий"
        biography.classList.remove('catalog__biography-is-active');
      });
      let elem = document.querySelector('.catalog__tabs-is-active');
      elem.lastElementChild.firstElementChild.classList.add('catalog__biography-is-active'); //добавляем активность первой "биографии" активной "страны"


      let artBtns = document.querySelectorAll('.artists__button').forEach(function(artBtn) { //для всех кнопок artists__button
        artBtn.classList.remove('artists__button-is-active'); //удаление активности
      })
      let defaultButton = elem.querySelector('.artists__default-button'); // 1-я кнопка "артиста" по умолчанию в активном табе "страна" (поиск по элементу активной зоны, а не по документу)
      defaultButton.classList.add('artists__button-is-active'); //добавление 1-ой кнопке "артиста" активного класса
      // console.log(defaultButton);



      $('.interval').accordion( "refresh" ); // обновление, перезапуск плагина для пересчета аккордеона
    });
  });
  //----------------------------------------------------------------------------------------------------------
  //-------------------------------------------accordion------------------------------------------------------
  $( function() {
    $( ".interval" ).accordion({
      collapsible: true,
      heightStyle: "content",
    });
  });
  //-----------------------------------------------------------------------------------------------------------
  //------------------------------------------табы художники---------------------------------------------------
  let artBtns = document.querySelectorAll('.artists__button');
    
    artBtns.forEach(function(tabsBtn) { //табы ("артисты")
      tabsBtn.addEventListener('click', function(event) { 
        artBtns.forEach(function(border){ //для всех кнопок-"артистов"
        border.classList.remove('artists__button-is-active'); //удаление бордера увсех кнопок
      });
      this.classList.add('artists__button-is-active'); //бордер на нажатую кнопку
      
      const path = event.currentTarget.dataset.artBtn;
      document.querySelectorAll('.catalog__biography').forEach(function(catalogTabs){
        catalogTabs.classList.remove('catalog__biography-is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__biography-is-active');
    });
  });
  //----------------------------------------------------------------------------------------------------------
  //----------------------скроллинг до блока с выбранным художником на разрешении <=850px---------------------
  if (document.documentElement.clientWidth <= 850) {
    artBtns.forEach(function(tabs) {
      tabs.addEventListener('click', ()=>{
        let activeCatalog = document.querySelector('.catalog__biography-is-active');
        activeCatalog.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      });
    });
  };
  //----------------------------------------------------------------------------------------------------------
});







