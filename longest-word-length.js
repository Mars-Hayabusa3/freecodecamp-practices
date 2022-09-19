// 2021年9月16日
// freeCodeCamp > Basic JavaScript Course > Basic Algorithm Scripting 第4題

function findLongestWordLength(str) {
    let words = str.split(" ");
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
  console.log(findLongestWordLength("May the force be with you")); // 5
  console.log(findLongestWordLength("Google do a barrel roll")); // 6
  console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8