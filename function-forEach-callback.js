Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((element, i, arr) => {
      newArray.push(callback(element, i, arr));
    });
    // Only change code above this line
    return newArray;
  };
  
  console.log([23, 65, 98, 5, 13].myMap(item => item * 2)); // [46, 130, 196, 10, 26]
  console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()));
  // ["NAOMI", "QUINCY", "CAMPERBOT"]
  console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])) // [1, 2, 5, 2, 1]