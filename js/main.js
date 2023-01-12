const startNow = document.querySelector('.start-btn');
const profile = document.querySelector('.profile-btn');
const mainPage = document.querySelector('.start-container');
const homePage = document.querySelector('.home-container');
const nav = document.querySelector('.nav-container');

const genrePage = document.querySelector('.genre-select-container');
const previousBtn = document.querySelector('.previous-btn');
const skipBtn = document.querySelector('.skip-btn');
const checkBtn = document.querySelector('.check-btn');

/* entry toggle */
function mainEntry() {
  mainPage.classList.toggle('hidden');
}

function genreEntry() {
  genrePage.classList.toggle('hidden');
}

function homeEntry() {
  homePage.classList.toggle('hidden');
}

/* main page */
startNow.addEventListener('click', function () {
  mainEntry();
  genrePage.className = 'genre-select-container';
});

profile.addEventListener('click', function () {
  mainEntry();
  homePage.className = 'home-container';
  nav.className = 'nav-container';
});

/* genre page */
previousBtn.addEventListener('click', function () {
  genreEntry();
  mainEntry();
});

skipBtn.addEventListener('click', function () {
  genreEntry();
  homeEntry();
});

const genreListAll = document.querySelector('.genre-list');
const genreTitle = document.querySelectorAll('.genre-title');
const genreList = document.querySelectorAll('.genre-list li');

genreListAll.addEventListener('click', function (event) {
  if (event.target.nodeName === 'INPUT') {
    const genreSelected = event.target.closest('li');
    for (let i = 0; i < genreList.length; i++) {
      if (genreList[i] === genreSelected) {
        genreTitle[i].classList.toggle('selected');
      }
    }
  }
});

var genreTagData = [];

function renderGenre(genre) {
  for (let i = 0; i < genreList.length; i++) {
    if (genreTitle[i].getAttribute('class') === 'genre-title selected') {
      genreTagData.push(genreTitle[i].textContent);
    }
  }
}

checkBtn.addEventListener('click', function () {
  genreEntry();
  homeEntry();
  renderGenre();
});
