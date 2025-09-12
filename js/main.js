document.body.addEventListener("click", (e) => {
  if (
    e.target.closest(
      ".explore-button, .explore-collections__cards-items, .card-auctions__button, .discover-buttons__create",
    )
  ) {
    e.preventDefault();
  }
});
