function bouncer(arr) {
    const arrWithoutFalse = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (!!arr[i]) {
        arrWithoutFalse.push(arr[i]);
      }
    }
    return arrWithoutFalse;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log(bouncer(["a", "b", "c"]));
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));
  console.log(bouncer([null, NaN, 1, 2, undefined]));

//   另一解
//   function bouncer(arr) {
//     return arr.filter(Boolean);
//   }