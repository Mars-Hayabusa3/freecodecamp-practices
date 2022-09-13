// 2021年9月3日
// freeCodeCamp > Basic JavaScript Course > Basic Data Structure 第4題

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));
// ['challenge', 'complete']