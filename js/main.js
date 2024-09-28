// Hamburger Menu

const hamburger = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  hamburger.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  hamburger.style.display = "none";
});

// Theme Toggle

const themeToggle = document.querySelector(".theme-toggler");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggle.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggle.querySelector("span:nth-child(2)").classList.toggle("active");
});
