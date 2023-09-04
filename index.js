const languageToggle = document.getElementById("language-toggle");
const burgerToggle = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".menu");
const menuOverFlow = document.querySelector(".screen-noscroll");
const burgerToggleActive = document.querySelector("burger-menu.active");
const btnTracker = document.querySelectorAll(".btn");

let currentLanguage = "en";

languageToggle.addEventListener("click", function () {
  if (currentLanguage === "en") {
    currentLanguage = "ru";
    languageToggle.textContent = "ru";
  } else {
    currentLanguage = "en";
    languageToggle.textContent = "en";
  }

  languageToggle.setAttribute("data-lang", currentLanguage);
  languageToggle.textContent = currentLanguage;
});

languageToggle.setAttribute("data-lang", currentLanguage);

burgerToggle.addEventListener("click", () => {
  if (burgerToggle.classList.contains("active")) {
    burgerToggle.classList.remove("active");
    burgerMenu.classList.remove("active");
    menuOverFlow.classList.remove("active");
  } else {
    burgerToggle.classList.add("active");
    burgerMenu.classList.add("active");
    menuOverFlow.classList.add("active");
  }
});

btnTracker.forEach((btn) => {
  const link = btn.getAttribute("data-link");

  window.location.href = link;
});
