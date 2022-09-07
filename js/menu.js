(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile-menu"),
    closeMenuBtn: document.querySelector(".mobile-menu-closed"),
    menu: document.querySelector(".header-mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
