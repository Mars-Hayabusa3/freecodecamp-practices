// 2021年9月13日
// freeCodeCamp > Basic JavaScript Course > Basic Algorithm Scripting 第3題
// 階層乘法

function factorialize(num) {
    let product = 1; 
    for (let i = 2; i <= num; i++) {
      product = product * i;
    }
    return product;
  }
  
  console.log(factorialize(5));
  // 120
  console.log(factorialize(10));
  // 3628800
  console.log(factorialize(20));
  // 2432902008176640000
  console.log(factorialize(0));
  // 1