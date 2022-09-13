// 2021年9月5日
// freeCodeCamp > Basic JavaScript Course > Basic Data Structure 第七題

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
  // [[true, false, true], [true, false, true]]
  console.log(copyMachine([1, 2, 3], 5));
  // [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]