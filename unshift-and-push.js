// 2021年9月3日
// freeCodeCamp > Basic JavaScript Course > Basic Data Structure 第三題

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
  }
  
console.log(mixedNumbers(['IV', 5, 'six']));
// ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9]