// function getCookie(name) {
//   let cookies = document.cookie;

//   const valueStart = cookies.indexOf(name);

//   if (valueStart === -1) {
//     return null;
//   }
//   return cookies.slice(valueStart + name.length + 1);
// }

// (function () {
//   setColorMode();
//   setColorModeToggleListener();
// })();

// function setColorMode() {
//   if (getCookie("mode") === "dark") {
//     document.body.classList.add("darkmode");
//   }
// }

// function setColorModeToggleListener() {
//   const toggleBtn = document.querySelector(".color-toggle");

//   toggleBtn.addEventListener("click", function () {
//     const currentColorMode = getCookie("mode");

//     currentColorMode === "light" || !currentColorMode
//       ? (document.cookie = "mode=dark")
//       : (document.cookie = "mode=light");
//     console.log("the current color mode: ", currentColorMode);
//     document.body.classList.toggle("darkmode");
//   });
// }

// const btn = document.querySelector(".color-toggle");

// btn.addEventListener("click", function () {
//   console.log("the cookie is: ", getCookie("mode"));
//   getCookie("mode") === "light" || !getCookie("mode")
//     ? (document.cookie = "mode=dark")
//     : (document.cookie = "mode=light");
//   document.body.classList.toggle("darkmode");
// });
