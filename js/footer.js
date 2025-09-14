// JS
document.addEventListener("DOMContentLoaded", () => {


  const swiper = new Swiper(".mySwiperFooter", {
    slidesPerView: 0, // по умолчанию для десктопа
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 5, 
      },
    },
  });


  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const list = btn.nextElementSibling;
      list.classList.toggle("active");
    });
  });
});
