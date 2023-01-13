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

var random = ['images/genre/adventure poster.jpg', 'images/genre/action poster.jpg', 'images/genre/comedy poster.jpg'];
const genreTagBox = document.querySelector('.banner-img-box');
const genreTagImg = document.createElement('img');
genreTagImg.setAttribute('class', 'banner-img');
genreTagImg.setAttribute('alt', 'banner');

function homeEntry() {
  homePage.classList.toggle('hidden');
}

function randomEntry() {
  const randomIndex = Math.floor(Math.random() * random.length);
  genreTagImg.setAttribute('src', random[randomIndex]);
  genreTagBox.appendChild(genreTagImg);
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
  randomEntry();
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

const tagListAll = document.querySelector('.genre-tag');

checkBtn.addEventListener('click', function () {
  genreEntry();
  homeEntry();
  for (let i = 0; i < genreList.length; i++) {
    if (genreTitle[i].getAttribute('class') === 'genre-title selected') {
      data.genreTagEntry.push(genreTitle[i].textContent);
      const tagList = document.createElement('li');
      tagList.setAttribute('class', 'genre-tag-inner');
      tagList.textContent = genreTitle[i].textContent;
      tagListAll.appendChild(tagList);
    }
  }
  return randomEntry();
});

/* home page */
