let container = document.querySelector(".mission-container");
let images = [
  "img/flower-cursor/img1.svg",
  "img/flower-cursor/img2.svg",
  "img/flower-cursor/img3.svg",
  "img/flower-cursor/img4.svg",
  "img/flower-cursor/img5.svg",
  "img/flower-cursor/img6.svg",
];

let lastX = 0; // Предыдущая позиция курсора по X
let lastY = 0; // Предыдущая позиция курсора по Y
let distance = 0; // Счетчик пройденного расстояния

container.addEventListener("mousemove", function (event) {
  let rect = container.getBoundingClientRect();
  let currentX = event.clientX - rect.left;
  let currentY = event.clientY - rect.top;

  let deltaX = currentX - lastX;
  let deltaY = currentY - lastY;
  distance += Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance >= 200) {
    let image = document.createElement("img");
    image.src = images[Math.floor(Math.random() * images.length)];
    image.className = "image";
    image.style.position = "absolute";

    // Добавляем изображение в DOM для получения его размеров
    container.appendChild(image);

    // Корректируем позицию на половину ширины и высоты изображения
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;

    image.style.left = currentX - imageWidth / 2 + "px";
    image.style.top = currentY - imageHeight / 2 + "px";

    // Добавляем класс для плавного появления
    setTimeout(function () {
      image.classList.add("fade-in");
    }, 10);

    // Плавное удаление после 2 секунд
    setTimeout(function () {
      image.classList.remove("fade-in");
      image.classList.add("fade-out");

      // Удаление элемента после завершения анимации
      setTimeout(function () {
        image.remove();
      }, 1000);
    }, 2000);

    distance = 0;
  }

  lastX = currentX;
  lastY = currentY;
});






//ВЫПАДАЮЩЕЕ МЕНЮ

  // Открытие/закрытие меню при клике на мобильное меню и крестик
document.querySelector(".mobile").addEventListener("click", function (e) {
  e.preventDefault();
  toggleMenu(); 
});

document.querySelector(".mobile-krest").addEventListener("click", function (e) {
  e.preventDefault();
  toggleMenu(); 
});

// Функция для переключения меню
function toggleMenu() {
  let menu = document.querySelector(".menu-mobile");
  let overlay = document.querySelector(".overlay");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Закрытие меню при клике на overlay
document.querySelector(".overlay").addEventListener("click", function () {
  let menu = document.querySelector(".menu-mobile");
  let overlay = document.querySelector(".overlay");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// Закрытие меню при клике на якорную ссылку
document.querySelectorAll(".menu-mobile a").forEach(anchor => {
  anchor.addEventListener("click", function () {
      let menu = document.querySelector(".menu-mobile");
      let overlay = document.querySelector(".overlay");
      menu.classList.remove("active");
      overlay.classList.remove("active");
  });
});




