const languageToggle = document.getElementById("language-toggle");
const burgerToggle = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".menu");
const menuOverFlow = document.querySelector(".screen-noscroll");

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
  burgerToggle.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  menuOverFlow.classList.toggle("active");
});
