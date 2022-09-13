// 2021年9月5日
// freeCodeCamp > Basic JavaScript Course > Basic Data Structure 第六題

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
  // [ 'DarkSalmon',
  // 'BlanchedAlmond',
  // 'LavenderBlush',
  //'PaleTurquoise',
  // 'FireBrick' ]