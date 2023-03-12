var team = [
  {
    name: "Jorge Jesus",
    image: "img/jorge.jpg",
    link: "https://www.transfermarkt.com.tr/jorge-jesus/profil/trainer/2145",
    position: "Coach",
  },
  {
    name: "Arda Güler",
    image: "img/arda.png",
    link: "https://www.transfermarkt.com.tr/arda-guler/profil/spieler/861410",
    position: "Behind the striker",
  },
  {
    name: "Enner Valencia",
    image: "img/valencia.jpg",
    link: "https://www.transfermarkt.com.tr/enner-valencia/profil/spieler/139503",
    position: "Striker",
  },
  {
    name: "Ferdi Kadıoğlu",
    image: "img/ferdi.jpg",
    link: "https://www.transfermarkt.com.tr/ferdi-kadioglu/profil/spieler/369316",
    position: "Right back",
  },
];

var index = 0;
var slaytCount = team.length;
var interval;

var settings = {
  duration: "2000",
  random: false,
};


init(settings);

document.querySelector(".fa-arrow-left").addEventListener("click", function () {
  index--;
  showSlide(index);
  console.log(index);
});

document.querySelector(".fa-arrow-right").addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
});


document.querySelectorAll("i").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });
});

document.querySelectorAll("i").forEach((item) => {
  item.addEventListener("mouseleave", () => {
    init(settings);
  });
});



function init(settings) {
  var prev;

  interval = setInterval(() => {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;

    } else {
      //artan index
      if (slaytCount == index + 1) {
        index = -1;
      } 
      // showSlide(index);
      index++;
      console.log(index);
    }

    showSlide(index);
  }, settings.duration);
}



function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }

  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-img-top").setAttribute("src", team[index].image);

  document.querySelector(".card-title").innerHTML = team[index].name;

  document.querySelector(".card-link").setAttribute("href", team[index].link);

  document.querySelector(".card-text").innerHTML = team[index].position;
}



