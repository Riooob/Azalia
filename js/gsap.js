

// gsap.registerPlugin(ScrollTrigger);

// // Анимация для изображения .gallery-img--4
// gsap.to(".gallery-img--4", {
//   scaleX: 1, // Увеличиваем только по ширине
//   scaleY: 1, // Высота остается по умолчанию
//   width: "100vw", // Устанавливаем ширину на 100%
//   height: "100vh", // Устанавливаем высоту на 100%
//   top: "0%", // Позиция по вертикали
//   left: "50%", // Центрируем по горизонтали
//   x: "-50%", // Сдвигаем влево на половину ширины
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".gallery",
//     start: "bottom bottom", // Начало анимации
//     end: "+=100%", // Остановка анимации
//     scrub: true, // Связываем с прокруткой
//     pin: ".gallery", // Закрепляем секцию на экране
//     onEnter: () => {
//       // Скрываем остальные изображения при входе
//       gsap.to(".gallery-img:not(.gallery-img--4)", {
//         opacity: 0,
//         ease: "none",
//         duration: 1,
//       });
//     },
//     onLeave: () => {
//       // Останавливаем анимацию, когда достигаем конца
//       gsap.to(".gallery-img--4", {
//         scaleX: 1,
//         scaleY: 1,
//         width: "100vw",
//         height: "100vh", // Устанавливаем высоту на 100% для заполнения экрана
//         top: "0%",
//         left: "50%",
//         x: "-50%",
//         ease: "none",
//       });
//       gsap.to(".gallery", {
//         pin: false, // Снимаем закрепление секции
//         duration: 0 // Завершаем анимацию сразу
//       });
//     },
//     onLeaveBack: () => {
//       // Возвращаем остальные изображения при обратном скролле
//       gsap.to(".gallery-img:not(.gallery-img--4)", {
//         opacity: 1,
//         ease: "none",
//         duration: 1,
//       });
//     }
//   },
// });

gsap.to('.gallery-img--4', {
    scrollTrigger: {
        trigger: '.gallery',
        start: 'bottom bottom',

    }
})















