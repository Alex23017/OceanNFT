const prevent = document.querySelectorAll(".decoration--buttons");
prevent.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
