let burger = document.querySelector('#burger');
let mainNav = document.querySelector('.header__main-nav');

let headerForm = document.querySelector('.header__form-1024');
let searchButton = document.querySelector('#search');
let buttonDesable = document.querySelector('.form__desable-768');
let formSearch = document.querySelector('.form__search');

burger.addEventListener('click', function() {
  this.classList.toggle('burger-is-active');
  mainNav.classList.toggle('header__main-nav-is-active');
});

searchButton.addEventListener('click', function() {
  headerForm.classList.add('header__form-768');
  formSearch.classList.add('search-is-active');
  buttonDesable.classList.add('form__desable-768-is-active');
});

buttonDesable.addEventListener('click', function() {
  headerForm.classList.remove('header__form-768');
  formSearch.classList.remove('search-is-active');
  buttonDesable.classList.remove('form__desable-768-is-active');
})


//---------------Меню с выпадающими списками-------------
window.onclick = function(event) {
  if (!event.target.matches('.dropdown__button')) {
    var dropdowns = document.getElementsByClassName("dropdown__list-wrapper");
    var buttons = document.getElementsByClassName("dropdown__button");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var activeButton = buttons[i];
      if (openDropdown.classList.contains('dropdown-is-active')) {
        openDropdown.classList.remove('dropdown-is-active');
      }
      if (activeButton.classList.contains('btn-is-active')) {
        activeButton.classList.remove('btn-is-active');
      }
    }
  }
}

window.onkeydown = function(esc) { //удаление классов активности кнопки и дропдауна при нажатии ESC
  if (esc.keyCode === 27) {
    document.querySelectorAll('.dropdown__list-wrapper').forEach(function(drop) {
      drop.classList.remove('dropdown-is-active');
    })

    document.querySelectorAll('.dropdown__button').forEach(function(btn) {
      btn.classList.remove('btn-is-active');
    })
  }
}


let buttons = document.querySelectorAll('.dropdown__button');
let dropdowns = document.querySelectorAll('.dropdown__list-wrapper');

for (let button of buttons) {
  button.addEventListener('click', elem);
}

function elem() {
  dropdowns.forEach(dropdown => {
    if (dropdown !== this.nextElementSibling) {
      dropdown.classList.remove('dropdown-is-active');
    }
  });

  buttons.forEach(button => {
    if (button !== this) {
      button.classList.remove('btn-is-active');
    }
  })

  this.nextElementSibling.classList.toggle('dropdown-is-active');
  this.classList.toggle('btn-is-active');
}


//---------------------Плавный Скроллинг до Якоря------------------------------------------------
$(document).ready(function() {
  var margin = 0; 
  $("a").click(function() {
     $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top+margin+ "px" 
     }, {
        duration: 2000, 
        easing: "swing"
     });
     return false;
  });
});