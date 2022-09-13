// 這是 React setState 的原理之一，如果我沒搞錯的話

// Only change code below this line
const bicycle = {
    gear: 2,
    // setGear: function(newGear) {
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);