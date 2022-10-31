function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype.numLegs = 4;
  const corgi = new Dog("Corgi");
  
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(corgi); // {name: "Corgi"}
  console.log(corgi.numLegs); // 4