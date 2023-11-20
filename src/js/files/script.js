// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

let prevScrollPos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("site-header").classList.remove("hidden");
  } else {
    document.getElementById("site-header").classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
};