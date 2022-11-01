function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);

console.log(duck.eat()); // nom nom nom
console.log(duck instanceof Animal); // true 

console.log(beagle.eat()); // nom nom nom
console.log(beagle instanceof Animal); // true