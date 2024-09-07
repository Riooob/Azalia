
$(document).ready(function () {
  $(".choice-cards-container").slick({
    dots: false, // Отключаем стандартные dots
    infinite: true,
    draggable: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Отключаем стандартные dots
        },
      },
    ],
  });

  $(".btn-left").on("click", function () {
    $(".choice-cards-container").slick("slickPrev");
  });

  $(".btn-right").on("click", function () {
    $(".choice-cards-container").slick("slickNext");
  });

  // Обработчик событий для кастомных кнопок
  $(".switch-block").on("click", function () {
    var slideIndex = $(this).data("slide"); // Получаем индекс слайда из data-slide атрибута
    $(".choice-cards-container").slick("slickGoTo", slideIndex); // Переключаемся на нужный слайд
  });

  // Подсвечиваем активную кнопку при переключении слайдов
  $(".choice-cards-container").on("afterChange", function(event, slick, currentSlide){
    $(".switch-block").removeClass("switch-btn-active");
    $('.switch-block[data-slide="' + currentSlide + '"]').addClass("switch-btn-active");
  });

  // Изначально устанавливаем активный класс для первой кнопки
  $('.switch-block[data-slide="0"]').addClass("switch-btn-active");
});

