'use strict';

var imagesArray = [];

var surveyLength = 0; //eslint-disable-line

var leftImage = document.getElementById('left'); //eslint-disable-line
var centerImage = document.getElementById('center'); //eslint-disable-line
var rightImage = document.getElementById('right'); //eslint-disable-line

var threePictures = document.getElementById('threePictures'); //eslint-disable-line

var randomIndex1 = 0;
var randomIndex2 = 0;
var randomIndex3 = 0;

//Constructor Function //
function ImageTracker(imageName, path) {
  this.ImageName = imageName;
  this.path = path;
  this.viewed = 0;
  this.clicked = 0;
  imagesArray.push(this);
}
//Image objects that will go through the constructor//
new ImageTracker ('Bag', 'img/bag.jpg');
new ImageTracker ('Banana', 'img/banana.jpg');
new ImageTracker ('Bathroom', 'img/bathroom.jpg');
new ImageTracker ('Boots', 'img/boots.jpg');
new ImageTracker ('Breakfast', 'img/breakfast.jpg');
new ImageTracker ('Bubblegum', 'img/bubblegum.jpg');
new ImageTracker ('Chair', 'img/chair.jpg');
new ImageTracker ('Cthulhu', 'img/cthulhu.jpg');
new ImageTracker ('Dog Duck', 'img/dog-duck.jpg');
new ImageTracker ('Dragon', 'img/dragon.jpg');
new ImageTracker ('Pen', 'img/pen.jpg');
new ImageTracker ('Pet Sweep', 'img/pet-sweet.jpg');
new ImageTracker ('Scissors', 'img/scissors.jpg');
new ImageTracker ('Shark', 'img/shark.jpg');
new ImageTracker ('Sweep', 'img/sweep.jpg');
new ImageTracker ('Tauntaun', 'img/tauntaun.jpg');
new ImageTracker ('Unicorn', 'img/unicorn.jpg');
new ImageTracker ('Water Can', 'img/water-can.jpg');
new ImageTracker ('Wine Glass', 'img/wine-glass.jpg');

// Generate 3 random images without duplicates //
function generateRandomThreeImg() {
  randomIndex1 = Math.floor(Math.random() * (imagesArray.length));

  randomIndex2 = Math.floor(Math.random() * (imagesArray.length));
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * (imagesArray.length));
  }

  randomIndex3 = Math.floor(Math.random() * (imagesArray.length));
  while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
    randomIndex3 = Math.floor(Math.random() * (imagesArray.length));
  }
  console.log(randomIndex1, randomIndex2, randomIndex3);

  leftImage.src = imagesArray[randomIndex1].path;
  leftImage.alt = imagesArray[randomIndex1].imageName;

  centerImage.src = imagesArray[randomIndex2].path;
  centerImage.alt = imagesArray[randomIndex2].imageName;

  rightImage.src = imagesArray[randomIndex3].path;
  rightImage.alt = imagesArray[randomIndex3].imageName;

  imagesArray[randomIndex1].viewed = imagesArray[randomIndex1].viewed + 1;
  imagesArray[randomIndex2].viewed = imagesArray[randomIndex2].viewed + 1;
  imagesArray[randomIndex3].viewed = imagesArray[randomIndex3].viewed + 1;

};

// Click function //
function handleButtonClick() {
  for (var i = 0; i < imagesArray.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = imagesArray[i].imageName + ' was displayed ' + imagesArray[i].viewed + ' times and clicked ' + imagesArray[i].clicked;
    resultList.appendChild(listElement);
  }
}

function handleUserClick() {
  var userClick = event.target.id;
  console.log(userClick);
  if (userClick === 'left') {
    console.log('user clicked left');
    surveyLength = surveyLength + 1;
    console.log('Round: ' + surveyLength);
    imagesArray[randomIndex1].clicked = imagesArray[randomIndex1].clicked + 1;
    console.log(imagesArray[randomIndex1].imageName + ' clicked: ' + imagesArray[randomIndex1].clicked + ' times');
  }else if (userClick === 'center'){
    console.log('user clicked center');
    surveyLength = surveyLength + 1;
    console.log('Round: ' + surveyLength);
    imagesArray[randomIndex2].clicked = imagesArray[randomIndex2].clicked + 1;
    console.log(imagesArray[randomIndex2]);
    console.log(imagesArray[randomIndex2].imageName + ' clicked: ' + imagesArray[randomIndex2].clicked + ' times');
  }else if (userClick === 'right') {
    console.log('user clicked right');
    surveyLength = surveyLength + 1;
    console.log('Round: ' + surveyLength);
    imagesArray[randomIndex3].clicked = imagesArray[randomIndex3].clicked + 1;
    console.log(imagesArray[randomIndex3].imageName + ' clicked: ' + imagesArray[randomIndex3].clicked + ' times');
    generateRandomThree();
  }else {
    alert('You sure that\'s a picture? Try again!');
  }
  if (surveyLength < 25) {
    generateRandomThree();
  }else {
    threePictures.removeEventListener('click',handleUserClick);
    var button = document.createElement('button');
    button.textContent = 'View Results';
    threePictures.appendChild(button);
    button.addEventListener('click', handleButtonClick);
  }
}

generateRandomThree();
threePictures.addEventListener('click', handleUserClick);
