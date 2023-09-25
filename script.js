var team = [
  {
    name: "İsmail Kartal",
    image: "img/arapismail.jpg",
    link: "https://www.transfermarkt.com.tr/ismail-kartal/profil/trainer/6366",
    position: "Coach",
  },
  {
    name: "Sebastian Szymanski",
    image: "img/sebastian.jpg",
    link: "https://www.transfermarkt.pl/sebastian-szymanski/profil/spieler/320748",
    position: "Behind the striker",
  },
  {
    name: "Edin Dzeko",
    image: "img/edin-dzeko.jpg",
    link: "https://www.transfermarkt.com.tr/edin-dzeko/profil/spieler/28396",
    position: "Striker",
  },
  {
    name: "Ferdi Kadıoğlu",
    image: "img/ferdi.jpg",
    link: "https://www.transfermarkt.com.tr/ferdi-kadioglu/profil/spieler/369316",
    position: "Right back",
  }
];

var index = 0;
var slideCount = team.length;
var interval;

var settings = {
  duration: "3000",
  random: false,
};

showSlide(index);
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
        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);
      prev = index;

    } else {
      //artan index
      if (slideCount == index + 1) {
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
    index = slideCount - 1;
  }

  if (i >= slideCount) {
    index = 0;
  }

  document.querySelector(".card-img-top").setAttribute("src", team[index].image);

  document.querySelector(".card-title").innerHTML = team[index].name;

  document.querySelector(".card-link").setAttribute("href", team[index].link);

  document.querySelector(".card-text").innerHTML = team[index].position;
}



