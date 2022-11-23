function Bird() {
    let weight = 15;
    this.getWeight = function () {
      return weight;
    };
  }
  
  const parrot = new Bird();
  console.log(parrot.getWeight()); // 15