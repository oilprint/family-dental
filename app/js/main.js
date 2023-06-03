$(function () {

  $('.hero__inner').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,  
    prevArrow: '<button class="slick-arrow slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="./images/symbol-defs.svg#icon-chevron"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="./images/symbol-defs.svg#icon-chevron"></use></svg></button>'
  });


  $('.review__star').rateYo({
    starWidth: "16px",
    normalFill: "#989AA1",
    ratedFill: "#F497AC",
    readOnly: true,
    spacing: "4px"
  });

  $('.review__inner').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button class="slick-arrow slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="./images/symbol-defs.svg#icon-chevron"></use></svg></button>',
  nextArrow: '<button class="slick-arrow slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="./images/symbol-defs.svg#icon-chevron"></use></svg></button>'
});



const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll ('[data-modal]');

// Кнопки открытия модалки
modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    
    modal.classList.remove('hidden');

    // Делаем так, чтобы внутри модалки коик не передавался выше родителю: находим внутри открываемой модалки блок modal__window и запрещаем ему передавать клики наверх (его родителю)

    modal.querySelector('.modal__window').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
})

// Кнопки закрітия модалки
modalClosebuttons.forEach(function (item) {
  item.addEventListener('click', function () {
    
    const modal = this.closest('[data-modal]');
  
    modal.classList.add('hidden');
  })
})

// Закрытие по клику по всему экрану
allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('hidden');
  })
})



})