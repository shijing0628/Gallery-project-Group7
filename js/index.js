

//sticky header for home page
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


// home page slider

let temp = 0;
var sliders = document.getElementsByClassName("mySlides");

var slidersDisplay = function (n) {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  for (let i = 0; i < sliders.length; i++) {
    // if (sliders[i].classList.contains("active")) {
    //   sliders[i].classList.remove("active");
    // }
  }
  console.log(n, sliders.length);
  if (n > sliders.length - 1) {
    n = 0;
  }
  if (n < 0) {
    n = sliders.length - 1;
  }
  temp = n;

  sliders[n].style.display = "block";
};

slidersDisplay(temp);

var plusSlides = function () {
  slidersDisplay(temp + 1);
};

var previousSlides = function () {
  slidersDisplay(temp - 1);
};


// burger menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-link');
  const navLinks = document.querySelector('.nav-link li')
  burger.addEventListener('click', () => {
    console.log('hi')
    nav.classList.toggle('nav-active');
  })

  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + 2}s`
  })

}
navSlide();


