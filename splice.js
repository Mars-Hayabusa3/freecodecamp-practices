// 2021年9月3日
// freeCodeCamp > Basic JavaScript Course > Basic Data Structure 第5題
// 用 splice 砍掉中間的物件，讓 arr 相加 = 10

// splice(x, y): 代表從 arr[x] 物件開始砍掉 y 個物件 

const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(1, 4);

console.log(arr);
// [2, 5, 2, 1]