function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("Je m'appelle " + this.name);
    }
  };

const corgi = new Dog('corgi')
console.log(corgi.eat())       // nom nom nom 
console.log(corgi.describe())  // Je m'appelle corgi