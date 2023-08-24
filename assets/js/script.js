// Tableaux de contenus pour chaque ligne
const link_plus = "?utm_source=ig_embed&amp;utm_campaign=loading"

const lignes = {
  ligne_tiger_2022: [
    "https://www.instagram.com/p/CYo7DKiM3sh/"+link_plus,
    "https://www.instagram.com/p/CYmQdacsYBG/"+link_plus,
    "https://www.instagram.com/p/CYjztJQssM6/"+link_plus
  ],
  ligne_noel_2021: [
    "https://www.instagram.com/p/CX6dbfSsso3/"+link_plus,
    "https://www.instagram.com/p/CX4ilnhMqoR/"+link_plus,
    "https://www.instagram.com/p/CX37q-dMkmv/"+link_plus
  ],
  ligne_halloween_2021: [
    "https://www.instagram.com/p/CVs9B23s-XE/"+link_plus,
    "https://www.instagram.com/p/CVqUeQlMGbh/"+link_plus,
    "https://www.instagram.com/p/CVntoajIfnB/"+link_plus
  ],
  ligne_peach_2021: [
    "https://www.instagram.com/p/CUP3FaOsE1M/"+link_plus,
    "https://www.instagram.com/p/CUNSkhyMzrE/"+link_plus,
    "https://www.instagram.com/p/CUKtSm8MrRA/"+link_plus
  ],
  ligne_ass_2021: [
    "https://www.instagram.com/p/CTCrm7QKO-y/"+link_plus,
    "https://www.instagram.com/p/CS9px9yKVnL/"+link_plus,
    "https://www.instagram.com/p/CS7S18YKCZ5/"+link_plus
  ],
  ligne_cat_2021: [
    "https://www.instagram.com/p/CSrawiaqm3j/"+link_plus,
    "https://www.instagram.com/p/CSraW5tqZTf/"+link_plus,
    "https://www.instagram.com/p/CSraNuXqMps/"+link_plus
  ],
  ligne_basketball_2021: [
    "https://www.instagram.com/p/CRZzaFoso2u/"+link_plus,
    "https://www.instagram.com/p/CRZzJ-9sAmw/"+link_plus,
    "https://www.instagram.com/p/CRZyohVsCnF/"+link_plus
  ],
  ligne_incredibles_2021: [
    "https://www.instagram.com/p/CQvhrkDMMk-/"+link_plus,
    "https://www.instagram.com/p/CQvhkdqMPt5/"+link_plus,
    "https://www.instagram.com/p/CQvhRf7MOYv/"+link_plus
  ],
  ligne_titans_2021: [
    "https://www.instagram.com/p/CQJDIOZsJv2/"+link_plus,
    "https://www.instagram.com/p/CQJC15bsdtD/"+link_plus,
    "https://www.instagram.com/p/CQJAHj5M3o4/"+link_plus
  ],
};


// Récupération des blocs de contenu Instagram
const blocsInstagram = document.querySelectorAll('.instagram-grid .instagram-media blockquote');

// Fonction pour choisir une ligne aléatoire
function choisirLigneAleatoire() {
  const lignesKeys = Object.keys(lignes).filter(key => key !== 'ligne_titans_2021');
  const ligneChoisie = lignesKeys[Math.floor(Math.random() * lignesKeys.length)];

  lignes[ligneChoisie].forEach((lien, index) => {
    blocsInstagram[index].setAttribute('data-instgrm-permalink', lien);
  });
}

// Fonction pour charger la ligne_titans_2021 par défaut
function chargerLigneTitans() {
  const ligneTitans = lignes.ligne_titans_2021;

  ligneTitans.forEach((lien, index) => {
    blocsInstagram[index].setAttribute('data-instgrm-permalink', lien);
  });
}

// Vérifier si la ligne a déjà été sélectionnée (utilisation d'une variable localStorage)
const ligneSelectionnee = localStorage.getItem('ligneSelectionnee');

if (ligneSelectionnee) {
  choisirLigneAleatoire();
} else {
  chargerLigneTitans();
  localStorage.setItem('ligneSelectionnee', 'true');
}

// Écouter l'événement de rafraîchissement de la page
window.addEventListener('load', choisirLigneAleatoire);