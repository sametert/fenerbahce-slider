var team = [
  {
    name: "Jorge Jesus",
    image: "img/jorge.jpg",
    link: "https://www.transfermarkt.com.tr/jorge-jesus/profil/trainer/2145",
  },
  {
    name: "Arda Güler",
    image: "img/arda.png",
    link: "https://www.transfermarkt.com.tr/arda-guler/profil/spieler/861410",
  },
  {
    name: "Enner Valencia",
    image: "img/valencia.jpg",
    link: "https://www.transfermarkt.com.tr/enner-valencia/profil/spieler/139503",
  },
  {
    name: "Ferdi Kadıoğlu",
    image: "img/ferdi.jpg",
    link: "https://www.transfermarkt.com.tr/ferdi-kadioglu/profil/spieler/369316",
  },
];

var index = 3;

document.querySelector(".card-img-top").setAttribute("src", team[index].image);

document.querySelector(".card-title").innerHTML = team[index].name;

document.querySelector(".card-link").setAttribute("href", team[index].link);
