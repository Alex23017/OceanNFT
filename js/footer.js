// JS
document.addEventListener("DOMContentLoaded", () => {


  const swiper = new Swiper(".mySwiperFooter", {
    slidesPerView: 0, 
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
  const shadowFooter = document.querySelectorAll(".footer__title--decoration, .footer__title--line")
  shadowFooter.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active")
    })
  })

  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const list = btn.nextElementSibling;
      list.classList.toggle("active");
    });
  });
});
