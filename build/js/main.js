$(document).ready(function () {

});

//слайдер карточек результатов
if ($('.js-results-slider').length) {
  const swiper = new Swiper('.js-results-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
  });
}

//удаление клонов фенси в слайдерах
$('.slick-cloned [data-fancybox]').each(function() {
  var attr = $(this).attr('data-fancybox');
  $(this).removeAttr('data-fancybox').attr('data-fancybox-trigger', attr);
});
