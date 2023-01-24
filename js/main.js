const startNow = document.querySelector('.start-btn');
const profile = document.querySelector('.profile-btn');
const mainPage = document.querySelector('.start-container');
const homePage = document.querySelector('.home-container');
const nav = document.querySelector('.nav-container');

const genrePage = document.querySelector('.genre-select-container');
const previousBtn = document.querySelector('.previous-btn');
const skipBtn = document.querySelector('.skip-btn');
const checkBtn = document.querySelector('.check-btn');
var tagListAll = document.getElementsByClassName('genre-tag')[0];

/* pulick API */

var request = new XMLHttpRequest();

request.open('GET', 'https://imdb-api.com/API/AdvancedSearch/k_b62uzd11?groups=top_1000&count=250');
request.responseType = 'json';
request.send();

var genreRequest = new XMLHttpRequest();

genreRequest.open('GET', 'https://imdb-api.com/API/AdvancedSearch/k_b62uzd11?genres=action&count=250');
genreRequest.responseType = 'json';
genreRequest.send();

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

function navEntry() {
  nav.classList.toggle('hidden');
}

const genreTagBox = document.querySelector('.banner-img-box');
const genreTagImgId = document.createElement('div');
const genreTagImg = document.createElement('img');
genreTagImgId.setAttribute('class', 'banner-img-wrapper');
genreTagImg.setAttribute('class', 'banner-img');
genreTagImg.setAttribute('alt', 'banner');

function randomEntry() {
  const randomIndex = Math.floor(Math.random() * request.response.results.length);
  genreTagImg.setAttribute('src', request.response.results[randomIndex].image);
  genreTagImgId.setAttribute('data-genreid', 'random');
  genreTagImgId.appendChild(genreTagImg);
  genreTagBox.appendChild(genreTagImgId);
}

/* main page */
startNow.addEventListener('click', function () {
  mainEntry();
  genreEntry();
});

profile.addEventListener('click', function () {
  mainEntry();
  homeEntry();
  navEntry();
  showGenreList();
  if (data.genreTagEntry.length !== 0) {
    for (let i = 0; i < data.genreTagEntry.length; i++) {
      tagListAll.appendChild(renderGenreTag(data.genreTagEntry[i]));
      tagListAll.firstElementChild.className = 'genre-tag-inner selected';
      genreTagImg.setAttribute('src', 'images/genre/fantasy poster.jpg');
      genreTagImgId.setAttribute('data-genreid', data.genreTagEntry[1]);
      genreTagImgId.appendChild(genreTagImg);
      genreTagBox.appendChild(genreTagImgId);
    }
  } randomEntry();
});

/* genre page */

previousBtn.addEventListener('click', function () {
  genreEntry();
  mainEntry();
});

skipBtn.addEventListener('click', function () {
  genreEntry();
  homeEntry();
  navEntry();
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

function renderGenreTag(entry) {
  var tagList = document.createElement('li');
  tagList.setAttribute('class', 'genre-tag-inner');
  tagList.textContent = entry;
  return tagList;
}

checkBtn.addEventListener('click', function () {
  genreEntry();
  homeEntry();
  navEntry();
  showGenreList();
  for (let i = 0; i < genreList.length; i++) {
    if (genreTitle[i].getAttribute('class') === 'genre-title selected' &&
    data.genreTagEntry.includes(genreTitle[i].textContent) === false) {
      data.genreTagEntry.push(genreTitle[i].textContent);
      tagListAll.appendChild(renderGenreTag(genreTitle[i].textContent));
      tagListAll.firstElementChild.className = 'genre-tag-inner selected';
    }
    randomEntry();
  }

});

/* home page
tagListAll.firstChild.classList.add('selected');
} */

const editTagBtn = document.querySelector('.edit-btn');

editTagBtn.addEventListener('click', function () {
  genreEntry();
  homeEntry();
  navEntry();
  skipBtn.classList.add('hidden');
  while (tagListAll.firstChild) {
    tagListAll.removeChild(tagListAll.firstChild);
  }
  data.genreTagEntry = [];
});

function renderGenreList(entryvalue) {
  var movieSectionRow = document.createElement('div');
  movieSectionRow.setAttribute('class', 'row-one');
  movieSectionRow.setAttribute('data-genreid', entryvalue);

  var sectionTitle = document.createElement('div');
  sectionTitle.setAttribute('class', 'movie-section-title');

  var sectionContent = document.createElement('div');
  sectionContent.setAttribute('class', 'movie-section-content');

  var sectionHeading = document.createElement('h4');
  sectionHeading.textContent = entryvalue.charAt(0).toUpperCase() + entryvalue.slice(1);
  var sectionViewAll = document.createElement('p');
  sectionViewAll.setAttribute('class', 'view-all');
  sectionViewAll.textContent = 'View all';
  var sectionListAll = document.createElement('ul');
  sectionListAll.setAttribute('class', 'movie-list');
  var sectionImgList = document.createElement('li');
  var sectionImg = document.createElement('img');
  for (let i = 0; i < 50; i++) {
    sectionImg.setAttribute('src', genreRequest.response.results[i].image);
    sectionImgList.appendChild(sectionImg);
    sectionListAll.appendChild(sectionImgList);
  }
  sectionTitle.appendChild(sectionHeading);
  sectionTitle.appendChild(sectionViewAll);
  sectionContent.appendChild(sectionListAll);
  movieSectionRow.appendChild(sectionTitle);
  movieSectionRow.appendChild(sectionContent);
  return movieSectionRow;
}

var genreArry = [
  'Top 100 Movies',
  'action',
  'adventure',
  'animation',
  'comedy',
  'crime',
  'drama',
  'family',
  'fantasy',
  'horror',
  'musical',
  'mystry',
  'romance',
  'sci-fi',
  'thriller',
  'war'
];

var movieSection = document.querySelector('.movie-section');

function showGenreList() {
  for (let i = 0; i < genreArry.length; i++) {
    movieSection.appendChild(renderGenreList(genreArry[i]));
  }
  return movieSection;
}
