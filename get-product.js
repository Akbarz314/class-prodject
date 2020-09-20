'use strict';

// helper function
function getAnimal() {
  var response = prompt('Would you rather a dog or a cat');
  var animal;

  while(response != 'dog' && response != 'cat') {
    response = prompt('Would you rather have a dog or cat? BE SPECIFIC');
  }

  if (response === 'dog') {
    animal = '<img src="../images/dog.jpg">';
  } else if (response === 'cat') {
    animal = '<img src="../images/cat.jpg">';
  } 

  return animal;
}

// helper function
function makeCount() {
  var count = prompt('Great! How many would you like?');
  while(isNaN(count) || count === '') {
    count = prompt("PLEASE enter a number. How many would you like?");
  }
  return count;
}

function renderPics() {
  var result = '';
  var AnimalType = getAnimal();
  var total = makeCount();

  for(var i = 0; i < total; i++) {
    result = result + '<p>' + AnimalType + '</p>';
    
  }

  return document.write(result);
}

renderPics();