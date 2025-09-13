document.addEventListener("DOMContentLoaded", () => {
  const userCards = [
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
    { name: "Eleanor Pena", imgUser: "/img/sellers-section/avatar-1.svg", count: 74875 },
  ];

  const openTop = document.querySelector(".sellers__title");

  openTop.addEventListener("click", () => {
    const swiperWrapper = document.querySelector(".sellers__cards");
    const dropMenu = document.querySelectorAll(".sellers__dropmenu");
    openTop.classList.toggle("active")
    dropMenu.forEach((btn) => {
      btn.classList.toggle("active");
    });
    const cardsToRender = userCards.slice(0, 14);

    if (swiperWrapper) {
      swiperWrapper.innerHTML = cardsToRender
        .map(
          (user, id) => `
      <div class="sellers-card">
        <p class="sellers-card__number">${id + 1}</p>
        <img src="${user.imgUser}" alt="avatar" class="sellers-card__avatar" />
        <div class="sellers-card__user">
          <h3 class="sellers-card__user-name">${user.name}</h3>
          <div class="sellers-card__user-info">
            <img src="/img/sellers-section/ETH.svg" alt="ETH" class="sellers-card__user-eth" />
            <p class="sellers-card__user-count">${user.count}</p>
          </div>
        </div>
        <p class="sellers-card__statistic">+468.48%</p>
      </div>
    `,
        )
        .join("");
    }
  });
});
