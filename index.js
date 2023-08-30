document.addEventListener("DOMContentLoaded", function () {
  const fishElements = document.querySelectorAll(".banner-item");

  fishElements.forEach(function (fish) {
    const randomAmplitude = Math.floor(Math.random() * 30) + 10;
    fish.style.animation = `fish-swim 2s alternate infinite ${randomAmplitude}ms`;
  });
});
