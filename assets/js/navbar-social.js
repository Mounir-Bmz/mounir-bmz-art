$(document).ready(function() {
  var navbarLogo = $(".navbar-logo");
  var navbarSocial = $(".navbar-social");

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    
    var moonlightSectionOffset = $("#moonlight").offset().top;

    if (scrollTop >= moonlightSectionOffset) {
      
      // Changer le src de l'image du logo
      navbarLogo.find("img").attr("src", "./assets/images/moonlight.png");

      // Affiche le contenu pour la partie Moonlight
      navbarSocial.html(`
        <a href="https://twitter.com/Moonlight_Bmz" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/moonlight_bmz" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@moonlight_bmz" target="_blank">
          <i class="fab fa-tiktok"></i>
        </a>
      `);
    } else {
      // Changer le src de l'image du logo à son état par défaut
      navbarLogo.find("img").attr("src", "./assets/images/mounir_bmz.png");

      // Afficher le contenu par défaut (logo Vimeo)
      navbarSocial.html(`
        <a href="https://vimeo.com/mounirboumaza" target="_blank">
          <i class="fab fa-vimeo"></i>
        </a>
      `);
    }
  });
});
