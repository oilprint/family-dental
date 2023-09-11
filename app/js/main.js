
console.log('text2'); 
$(function () {

  $('.hero__inner').slick({
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,  
    prevArrow: '<button class="slick-arrow slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="./images/symbol-defs.svg#icon-chevron"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="./images/symbol-defs.svg#icon-chevron"></use></svg></button>'
  });


  $('.review__star').rateYo({
    starWidth: "16px",
    normalFill: "#989AA1",
    ratedFill: "#F497AC",
    readOnly: true,
    spacing: "4px",
    starSvg: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0L9.8175 4.93691L15 5.73344L11.25 9.57413L12.135 15L7.5 12.4369L2.865 15L3.75 9.57413L0 5.73344L5.1825 4.93691L7.5 0Z"/></svg>',
    
  });

  $('.review__inner').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,  
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode:true,
  responsive: [
    {
      breakpoint: 1024, // - от какой ширины изменять настройки(1024 и ниже)
      settings: {
        // вносим изменения на ширине 1024 и ниже 
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 578, // брекпоинтов может быть сколько угодно
      settings: {
        dots: false,
        centerMode:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});


const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll ('[data-modal]');
const bodyLock = document.querySelector('body');

// Кнопки открытия модалки
modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    
    modal.classList.remove('hidden');
    bodyLock.classList.add('lock');

    // Делаем так, чтобы внутри модалки коик не передавался выше родителю: находим внутри открываемой модалки блок modal__window и запрещаем ему передавать клики наверх (его родителю)

    modal.querySelector('.modal').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
});

// Кнопки закрітия модалки
modalClosebuttons.forEach(function (item) {
  item.addEventListener('click', function () {
    
    const modal = this.closest('[data-modal]');
  
    modal.classList.add('hidden');
    bodyLock.classList.remove('lock');
  });
});

// Закрытие по клику по всему экрану
allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('hidden');
    bodyLock.classList.remove('lock');
  });
});

// плавный скрол
 $(".header__menu, .logo, .footer").on("click","a", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});



  // // активній класс меню при скролле 
  
var sections = $('section')
  , nav = $('nav')
  , header = $('header')
  , nav_height = header.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});





});