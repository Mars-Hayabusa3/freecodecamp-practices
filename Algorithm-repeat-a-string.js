function repeatStringNumTimes(str, num) {
    let strArray = "";
    for (let i = 1; i <= num; i++) {
      strArray += str;
    }
    return strArray;
  }
  
  repeatStringNumTimes("abc", 3);