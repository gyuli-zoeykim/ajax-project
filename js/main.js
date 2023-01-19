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

/* var apiIndex = [
  'groups=top_1000&count=250',
  'groups=top_100&count=100',
  'genres=action&count=250'
];
 var request = new XMLHttpRequest();
var apiArry = [];
for (let i = 0; i < apiIndex.length; i++) {
  var url = 'https://imdb-api.com/API/AdvancedSearch/k_b62uzd11?' + apiIndex[i];
  request.open('GET', url);
  request.responseType = 'json';
  request.addEventListener('load', function () {
    console.log('xhr status:', request.status);
    console.log('xhr response:', request.response);
  });
  apiArry.push(request.response);
  request.send();
} */

var request = new XMLHttpRequest();

request.open('GET', 'https://imdb-api.com/API/AdvancedSearch/k_b62uzd11?groups=top_1000&count=250');
request.responseType = 'json';
request.send();

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
  if (data.genreTagEntry.length !== 0) {
    for (let i = 0; i < data.genreTagEntry.length; i++) {
      tagListAll.appendChild(renderGenreTag(data.genreTagEntry[i]));
      tagListAll.firstElementChild.className = 'genre-tag-inner selected';
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

/* var sectionTitle = document.querySelector('.movie-section-title');
var sectionContent = document.querySelector('.movie-section-content');
var sectionHeading = document.createElement('h4');
sectionHeading.textContent = 'Top 100 Moives';
var sectionViewAll = document.createElement('p');
sectionViewAll.setAttribute('class', 'view-all');
sectionViewAll.textContent = 'View all';
var sectionListAll = document.createElement('ul');
var sectionImgList = document.createElement('li');
var sectionImg = document.createElement('img');
sectionImg.setAttribute('src', 'images/genre/adventure poster.jpg');

sectionTitle.appendChild(sectionHeading);
sectionTitle.appendChild(sectionViewAll);
sectionImgList.appendChild(sectionImg);
sectionListAll.append(sectionImgList);
sectionContent.appendChild(sectionListAll); */
