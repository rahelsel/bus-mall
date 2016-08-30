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
