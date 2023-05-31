$(function () {

  $('.hero__inner').slick({
    dots: true,
    arrows: true,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 2000,  
    prevArrow: '<button class="slick-arrow slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="./images/symbol-defs.svg#icon-chevron"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__icon" width="32" height="32"><use xlink:href="./images/symbol-defs.svg#icon-chevron"></use></svg></button>'
  });
  
});