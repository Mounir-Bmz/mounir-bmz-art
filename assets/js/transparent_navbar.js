$(document).ready(function() {
  var navbar = $(".navbar");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      navbar.removeClass("bg-transparent");
    } else {
      navbar.addClass("bg-transparent");
    }
  });
});
