(function () {
  setJsAvailableClass();
  //hideMenu();
  //setMenuDisplayStatus();
  addMenuToggle();
})();

function setJsAvailableClass() {
  document.body.classList.add("js");
}

// function setMenuDisplayStatus() {
//   const menu = document.getElementsByClassName("menu__list");

//   menu.classList.remove("hide");
//   menu.classList.add("show");
// }

function hideMenu() {
  const menuList = document.querySelector(".menu__list");
  menuList.classList.add("hide");
}

function addMenuToggle() {
  const menuBtn = document.querySelector(".menu__btn");
  console.log("the btn: ", menuBtn);
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
