document.addEventListener("DOMContentLoaded", () => {
  // МАСИВ ПОЛЬЗОВАТЕЛЕЙ

  const users = [
    {
      name: "Jhones Nickeh",
      email: "@jhonartist",
      avatar: "/img/users-section/avatar-man.svg",
      followers: 125,
      following: 256,
      artworks: 129,
    },
    {
      name: "Cody Fisher",
      email: "@codyfishe",
      avatar: "img/users-section/avatar-girl-1.svg",
      followers: 356,
      following: 456,
      artworks: 89,
    },
    {
      name: "Jerome Bell",
      email: "@jeromebt",
      avatar: "img/users-section/avatar-girl-2.svg",
      followers: 546,
      following: 789,
      artworks: 54,
    },

    {
      name: "Jhones Nickeh",
      email: "@jhonartist",
      avatar: "/img/users-section/avatar-man.svg",
      followers: 125,
      following: 256,
      artworks: 129,
    },
    {
      name: "Cody Fisher",
      email: "@codyfishe",
      avatar: "img/users-section/avatar-girl-1.svg",
      followers: 356,
      following: 456,
      artworks: 89,
    },
    {
      name: "Jerome Bell",
      email: "@jeromebt",
      avatar: "img/users-section/avatar-girl-2.svg",
      followers: 546,
      following: 789,
      artworks: 54,
    },
  ];

  const mySwiperUSERS = document.querySelector(".mySwiperUSERS .swiper-wrapper");

  if (mySwiperUSERS) {
    mySwiperUSERS.innerHTML = users
      .map(
        (user) =>
          `
    <div class="card-container__user swiper-slide">
      <img class="user-avatar" src=${user.avatar} alt="avatar">
              <img class="user__background" src="img/users-section/background-card.svg" alt="background" />
              <h3 class="user__name">${user.name}</h3>
              <p class="user__email">
                @jhonartist
                <img src="img/hero-section/header/verification.svg" alt="verification" />
              </p>
              <div class="user-info">
                <div class="user-info__followers">
                  <h3 class="user-info__followers-number">${user.followers}</h3>
                  <p class="user-info__followers-text">Followers</p>
                </div>
                <div class="user-info__following">
                  <h3 class="user-info__following-number">${user.following}</h3>
                  <p class="user-info__following-text">Following</p>
                </div>
                <div class="user-info__artworks">
                  <h3 class="user-info__artworks-number">${user.artworks}</h3>
                  <p class="user-info__artworks-text">Artworks</p>
                </div>
              </div>
              <div class="user-button">
                <a class="user-button__follow decoration--buttons" href="">Follow</a>
              </div>
            </div>
       
      `,
      )
      .join("");
    const prevent = document.querySelectorAll(".decoration--buttons");
    prevent.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });

    // СВАЙПЕР
    const swiper = new Swiper(".mySwiperUSERS", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
      },
    });
  }
});
