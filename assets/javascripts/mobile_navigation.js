$(document).ready(function() {
  $(".menu-trigger").on("click", showMobileMenu);

  function showMobileMenu(e) {
    e.preventDefault();

    $(".nav-links").toggleClass("active");
    $(".nav-links.active a").on("click", dismissMobileMenu);
  }

  function dismissMobileMenu(e) {
    $(".nav-links").removeClass("active");
  }
});
