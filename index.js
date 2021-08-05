let slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");
const checkbox = document.getElementById("checkbox");
const links = document.querySelectorAll(".link");

// IMAGE SLIDER

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    cover: true,
    heightRatio: 0.5,
    perPage: 5,
    breakpoints: {
      600: {
        perPage: 1,
      },
      720: {
        perPage: 3,
      },
    },
  }).mount();
});

// BACK TO TOP BUTTON

mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// CHECKBOX

links.forEach((link) => {
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
});
