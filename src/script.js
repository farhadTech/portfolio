document.getElementById('menu-btn').onclick = function () {
  this.classList.toggle('open');
}



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