const video1 = document.getElementById("projectVideo-1");
const video2 = document.getElementById("projectVideo-2");
const video3 = document.getElementById("projectVideo-3");
const hoverSign = document.querySelector(".hover-sign");

// sidebar elements//
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// sidebar elements//
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");

  sideBar.classList.add("open-sidebar");
});
close.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");

  sideBar.classList.add("close-sidebar");
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll(".autoBlur, .autoDisplay, .fadeInRight").forEach((el) => {
  observer.observe(el);
});
