// 2021年9月13日
// freeCodeCamp > Basic JavaScript Course > Basic Algorithm Scripting 第2題

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello"));
  console.log(reverseString("Howdy"));
  console.log(reverseString("Greetings from Earth"));