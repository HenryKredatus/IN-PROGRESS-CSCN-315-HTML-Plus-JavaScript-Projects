//Mobile Menu Toggle
const menutoggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
menutoggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

//Smooth Scrolling
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    menu.classList.remove("show"); //Closes the mobile menu
  });
});

//Slider
const slides = document.querySelectorAll("#slides img");
let current = 0;
function shownextslide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}
setInterval(shownextslide, 4000); //every 4 seconds
