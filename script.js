const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  // Toggle both the button's class and the mobile menu's class
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('show-menu');
  overlay.classList.toggle('overlay-show');
});


// JavaScript to handle the scroll event and toggle the navbar
window.onscroll = function () {
  var fixedNavbar = document.getElementById("fixed-navbar");
  var scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    // Adjust the scroll position value as needed
    fixedNavbar.classList.remove("hidden");
  } else {
    fixedNavbar.classList.add("hidden");
  }
};