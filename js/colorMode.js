(function () {
  initializeColorMode();
  setColorModeToggleListener();
})();

function hasCookie(name) {
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith(`${name}=`))
  ) {
    return true;
  } else {
    return false;
  }
}

function hasCookieValue(name, value) {
  if (
    document.cookie.split(";").some((item) => item.includes(`${name}=${value}`))
  ) {
    return true;
  } else {
    return false;
  }
}

function initializeColorMode() {
  if (hasCookie("mode") && hasCookieValue("mode", "dark")) {
    document.body.classList.add("darkmode");
  }
}

function resetDarkMode(oldVal) {
  document.cookie = `mode=${oldVal}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

function setColorModeToggleListener() {
  const toggleBtn = document.querySelector(".color-mode__btn");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      if (hasCookie("mode") && hasCookieValue("mode", "dark")) {
        resetDarkMode("dark");
        document.cookie =
          "mode=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      } else {
        resetDarkMode("light");
        document.cookie =
          "mode=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      }

      document.body.classList.toggle("darkmode");
    });
  }
}
