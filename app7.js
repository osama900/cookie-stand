"use strict";
///////constructor function
function Kitten(
  name,
  interests,
  isGoodWithCats,
  isGoodWithDogs,
  isGoodWithKids
) {
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
}

// create an object
let frankie = new Kitten(
  "frankie",
  ["napping", "eating cheese", "cuddling"],
  false,
  false,
  true
);

let jumper = new Kitten(
  "jumper",
  ["playing with strings", "eating mouses", "cuddling"],
  true,
  false,
  true
);
console.log(jumper);

let serena = new Kitten(
  "serena",
  ["napping", "eating cheese", "cuddling"],
  false,
  false,
  true
);
// ===================================================================================================

// create global function to have random age
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// prototype
Kitten.prototype.getAge = function () {
  // I can create new property in the prototype, is already in the constructor
  this.age = random(3, 12) + " Months";
};
frankie.getAge();
console.log(frankie.age);
