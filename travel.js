let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");
let menuBar = document.querySelector("#menu-bar");
let aMenu = document.querySelector(".navbar");
let vidBtn = document.querySelectorAll(".video-btn");
function showBar() {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
}
function showForm() {
  loginForm.classList.add("active");
}
function hideForm() {
  loginForm.classList.remove("active");
}
function showMenu() {
  menuBar.classList.toggle("fa-times");
  aMenu.classList.toggle("active");
}

vidBtn.forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelector(".control .blue").classList.remove("blue");
    e.classList.add("blue");
    let src = e.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
