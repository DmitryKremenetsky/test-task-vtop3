const languageToggle = document.getElementById("language-toggle");

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
