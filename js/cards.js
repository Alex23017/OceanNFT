document.addEventListener("DOMContentLoaded", () => {
  // МАСИВ КАРТОЧЕК

  const products = [
    {
      title: "Apollo Eth #1289 NFT",
      imageCard: "img/nft-section/Appollo.svg",
      userName: "@jhonartist(1)",
    },
    {
      title: "Sassy Bull #1169 Art",
      imageCard: "./img/nft-section/Sassy.svg",
      userName: "@jhonartist(2)",
    },
    {
      title: "Satisfying #4289 Art",
      imageCard: "./img/nft-section/Satisfying.svg",
      userName: "@jhonartist(3)",
    },
    {
      title: "Apollo Eth#1289 NFT",
      imageCard: "./img/nft-section/Appollo.svg",
      userName: "@jhonartist(4)",
    },
    {
      title: "Sassy Bull #1169 Art",
      imageCard: "./img/nft-section/Sassy.svg",
      userName: "@jhonartist(5)",
    },
    {
      title: "Satisfying Art #4289 Art",
      imageCard: "./img/nft-section/Satisfying.svg",
      userName: "@jhonartist(6)",
    },
  ];
  const openTop = document.querySelector(".sellers__title");
  openTop.addEventListener("click", () => {
    openTop.classList.toggle("active");
  });

  const mySwiperNFT = document.querySelector(".mySwiperNFT .swiper-wrapper");

  if (mySwiperNFT) {
    mySwiperNFT.innerHTML = products
      .map(
        (product) => `
        <div class="swiper-slide">
          <div class="card-body nft-body"> 
            <img src="${product.imageCard}" alt="product" style="width: 100%;" />
            
           <div class="cards-body ">
            <div class="cards-body__column nft-body__column">
              <div class="cards-hand nft-cards__hand">
                <p class="card-hand__title nft-hand__title">${product.title}</p>
                <div class="card-hand__user nft-hand__user">
                  <img class="card-hand__user-img nft-hand__user-img" src="./img/hero-section/avatar.svg" alt="avatar" />
                  <p class="card-hand__user-name nft-hand__user-name">${product.userName}</p>
                  <img
                    class="card-hand__user-verification nft-hand__user-verification"
                    src="./img/hero-section/header/verification.svg"
                    alt="verivication"
                  />
                </div>
                <p class="card-hand__text nft-hand__text">Reserve price</p>
                <div class="card-hand__eth">
                  <img class="card-hand__eth-img" src="./img/hero-section/Ethereum_white.svg" alt="eth" />
                  <p class="card-hand__eth-text nft-hand__eth-text">ETH 9.31</p>
                  <p class="card-hand__eth-cost nft-hand__eth-cost">($29,8846)</p>
                </div>
              </div>
              <div class="card-auctions nft-auctions">
                <p class="card-auctions__text nft-auctions__text">Auction Ends in</p>
                <div class="card-auctions__time nft-auctions__time">
                  <div class="card-auctions__hours ">
                    <h3 class="card-auctions__hours-number">18</h3>
                    <p class="card-auctions__hours-label">Hours</p>
                  </div>
                  <div class="card-auctions__mins">
                    <h3 class="card-auctions__mins-number">25</h3>
                    <p class="card-auctions__mins-label">Mins</p>
                  </div>
                  <div class="card-auctions__secs">
                    <h3 class="card-auctions__secs-number">44</h3>
                    <p class="card-auctions__secs-label">Secs</p>
                  </div>
                </div>
                <a class="place__button--large decoration--buttons" href="">
                  Place Bid <img src="./img/hero-section/arrow-right.svg" alt="arrow-right"/></a>
              </div>
            </div>
          </div>

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
    const swiper = new Swiper(".mySwiperNFT", {
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

        1350: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
      },
    });
  }
});
