addMenuToggle();

function addMenuToggle() {
  const menuBtn = document.querySelector(".menu__btn");
  menuBtn.addEventListener("click", function () {
    const list = this.nextElementSibling;
    if (list.classList.contains("show")) {
      this.setAttribute("aria-expanded", "true");
      list.classList.remove("show");
    } else {
      this.setAttribute("aria-expanded", "true");
      list.classList.add("show");
    }
  });
}
