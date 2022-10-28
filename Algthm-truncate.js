function truncateString(str, num) {
  const strArray = str.split("");
  const strArrayNova = [];
  for (let i = 0; i < num; i++) {
    strArrayNova.push(strArray[i]);
  }
  const arrayNovaJoin = strArrayNova.join("") + "...";

  if (str.length > num){
    return arrayNovaJoin;
  } else {
    return str;
  }
  // 如果後面的數字 >= str長度，則全部顯示
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));