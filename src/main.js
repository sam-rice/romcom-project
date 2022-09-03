//BUTTON VARIABLES
var homeButton = document.querySelector(".home-button");
var randomButton = document.querySelector(".random-cover-button");
var saveButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");
var customBookButton = document.querySelector(".create-new-book-button");


//PAGE VIEWS
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

//DISPLAYED POSTER ELEMENTS VARIABLES
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

//RANDOM COVER ELEMENTS
var randomImage = covers[getRandomIndex(covers)];
var randomTitle = titles[getRandomIndex(titles)];
var randomTagline1 = descriptors[getRandomIndex(descriptors)];
var randomTagline2 = descriptors[getRandomIndex(descriptors)];

//INPUT FIELDS
var allFields = document.querySelector(".form-view");

//SAVED COVERS PAGE

var savedCoversGallery = document.querySelector(".saved-covers-section");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

//DEFAULT HOME PAGE
var currentCover = new Cover(randomImage, randomTitle, randomTagline1, randomTagline2);

coverImage.src = currentCover.cover;
coverTitle.innerText = currentCover.title;
tagline1.innerText = currentCover.tagline1;
tagline2.innerText = currentCover.tagline2;



//EVENT LISTENERS
//buttons
randomButton.addEventListener("click", newRandomCover);
makeNewButton.addEventListener("click", showForm);
viewSavedButton.addEventListener("click", showSaved);
homeButton.addEventListener("click", showHome);
customBookButton.addEventListener("click", makeCustomBook);
saveButton.addEventListener("click", storeCover);

//EVENT HANDLERS/MISC FUNCTIONS

function newRandomCover() {
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];

  randomCover = new Cover(randomImage, randomTitle, randomTagline1, randomTagline2);

  coverImage.src = randomCover.cover;
  coverTitle.innerText = randomCover.title;
  tagline1.innerText = randomCover.tagline1;
  tagline2.innerText = randomCover.tagline2;

  return currentCover = randomCover;
};

function showForm() {
  formView.classList.remove("hidden");
  homeView.classList.add("hidden");
  savedView.classList.add("hidden");

  allFields.classList.remove("hidden");

  homeButton.classList.remove("hidden");
  saveButton.classList.add("hidden");
  randomButton.classList.add("hidden");
  viewSavedButton.classList.remove("hidden");
};

function showSaved() {
  formView.classList.add("hidden");
  homeView.classList.add("hidden");
  savedView.classList.remove("hidden");

  homeButton.classList.remove("hidden");
  saveButton.classList.add("hidden");
  randomButton.classList.add("hidden");
  viewSavedButton.classList.remove("hidden");

  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversGallery.innerHTML = savedCoversGallery.innerHTML + 
      `<section class="main-cover">
      <img class="cover-image" src="${savedCovers[i].cover}"> 
      <h2 class="cover-title">${savedCovers[i].title}</h2> 
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png"> 
      <img class="overlay" src="./assets/overlay.png">
      </section>`
  };
};

function showHome() {
  formView.classList.add("hidden");
  homeView.classList.remove("hidden");
  savedView.classList.add("hidden");

  homeButton.classList.add("hidden");
  saveButton.classList.remove("hidden");
  randomButton.classList.remove("hidden");
  viewSavedButton.classList.remove("hidden");
};

function makeCustomBook() {
  event.preventDefault();
  var userSrc = document.querySelector("#cover").value;
  var userTitle = document.querySelector("#title").value;
  var userDesc1 = document.querySelector("#descriptor1").value;
  var userDesc2 = document.querySelector("#descriptor2").value;
  
  covers.push(userSrc);
  titles.push(userTitle);
  descriptors.push(userDesc1);
  descriptors.push(userDesc2);
  
  var newUserCover = new Cover (userSrc, userTitle, userDesc1, userDesc2);
  
  showHome();
  displayMadeCover(newUserCover);

  return currentCover = newUserCover;
};

function displayMadeCover(madeCover) {
  coverImage.src = madeCover.cover;
  coverTitle.innerText = madeCover.title;
  tagline1.innerText = madeCover.tagline1;
  tagline2.innerText = madeCover.tagline2;
};

function storeCover() {
  if (!savedCovers.includes(currentCover)) {
     savedCovers.push(currentCover);
  };
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
