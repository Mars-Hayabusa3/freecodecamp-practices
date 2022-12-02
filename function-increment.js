// The global variable
let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
  // not to change the value of "fixedValue"
}

const newValue = incrementer();
// 在 function 外另外用變數呼叫 function，不會動到 fixedValue
console.log(newValue); // 5
