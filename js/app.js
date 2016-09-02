///Paired Progamming with Michael Molinari///

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

//// IMG OBJECTS ARRAY //// make an array var stuff [] for loop

var images = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/water-can.jpg', 'img/wine-glass.jpg'] //eslint-disable-line

//// CONSTRUCTOR FUNCTION ////

function ImageTracker(imageName, path) {
  this.imageName = imageName;
  this.path = path;
  this.viewed = 0;
  this.clicked = 0;
  imagesArray.push(this);
}

for (var i = 0; i < images.length; i++) {
  new ImageTracker(images[i].split('/')[1].split('.')[0],images[i]);
}

//// GET RANDOM 3 IMAGES -- NO DUPLICATES ////
function generateRandomThree() {
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
  rightImage.alt - imagesArray[randomIndex3].imageName;

  imagesArray[randomIndex1].viewed = imagesArray[randomIndex1].viewed + 1;
  imagesArray[randomIndex2].viewed = imagesArray[randomIndex2].viewed + 1;
  imagesArray[randomIndex2].viewed = imagesArray[randomIndex2].viewed + 1;
};

/////TRACKS NUMBER OF CLICKS TO SURVEY AND STOPS AT 25 /////

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
  } else if (userClick === 'right') {
    console.log('user clicked right');
    surveyLength = surveyLength + 1;
    console.log('Round: ' + surveyLength);
    imagesArray[randomIndex3].clicked = imagesArray[randomIndex3].clicked + 1;
    console.log(imagesArray[randomIndex3].imageName + ' clicked: ' + imagesArray[randomIndex3].clicked + ' times');
    generateRandomThree();
  } else {
    alert('You sure that\'s a picture? Try again!');
  }
  if (surveyLength < 25) {
    generateRandomThree();
  } else {
    alert('That\'s all for now! Thank you for participating!');
  }
}

generateRandomThree();
threePictures.addEventListener('click', handleUserClick);
