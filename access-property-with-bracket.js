// 2021年9月16日
// freeCodeCamp > Basic JavaScript Course > Basic Data Structure 第15題

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));
  console.log(checkInventory("bananas"));
  console.log(checkInventory("strawberries"));