const btnOpenBurger = document.getElementById("burger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");
const scroll = document.body;
const abstract = document.querySelector(".abstract-body");

const elementsToToggle = [btnOpenBurger, nav, overlay, header, scroll];

// Проходимся по масиву классов и добавляем open при клике на бургер
btnOpenBurger.addEventListener("click", () => {
  elementsToToggle.forEach((el) => {
    el.classList.toggle("open");
  });
});

// Удаляем классы если экран больше 992.92
window.addEventListener("resize", () => {
  if (window.innerWidth > 992.92) {
    elementsToToggle.forEach((el) => el.classList.remove("open"));
  }

});
