let slideIndex = 0;
showSlides(); // call showslide method

function showSlides() {
  let i;

  // get the array of divs' with classname image-sliderfade
  let slides = document.getElementsByClassName("image-sliderfade");

  // get the array of divs' with classname dot
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    // initially set the display to
    // none for every image.
    slides[i].style.display = "none";
  }

  // increase by 1, Global variable
  slideIndex++;

  // check for boundary
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Change image every 3 seconds
  setTimeout(showSlides, 3000);
}

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    // Adjust 50 to the desired scroll position when the change should happen
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  var navbar1 = document.getElementById("navbar-navigation1");
  var navbar2 = document.getElementById("navbar-navigation2");
  var navbar3 = document.getElementById("navbar-navigation3");
  if (window.scrollY > 50) {
    // Adjust 50 to the desired scroll position when the change should happen
    navbar1.classList.add("navbar-navigation-scrolled");
    navbar2.classList.add("navbar-navigation-scrolled");
    navbar3.classList.add("navbar-navigation-scrolled");
  } else {
    navbar1.classList.remove("navbar-navigation-scrolled");
    navbar2.classList.remove("navbar-navigation-scrolled");
    navbar3.classList.remove("navbar-navigation-scrolled");
  }
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("hidden-wa");
  if (window.scrollY > 5800) {
    // Adjust 50 to the desired scroll position when the change should happen
    navbar.classList.add("hidden-wa");
  } else {
    navbar.classList.remove("hidden-wa");
  }
});

function getSizePhone() {
  var screenWidth = window.innerWidth;
  var footer = document.getElementById("footer");
  var navbar = document.getElementById("hidden-navbar");
  console.log(screenWidth);

  if (screenWidth > 400) {
    footer.classList.add("footer-navigation-disable");
  } else {
    footer.classList.remove("footer-navigation-disable");
  }
  if (screenWidth < 400) {
    navbar.classList.add("navbar-navigation-disable");
  } else {
    navbar.classList.remove("navbar-navigation-disable");
  }
}

// Call getSizePhone initially
getSizePhone();

// Add an event listener to adjust on window resize
window.addEventListener("resize", getSizePhone);
