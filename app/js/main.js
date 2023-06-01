$(function () {

  $('.hero__inner').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,  
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

});