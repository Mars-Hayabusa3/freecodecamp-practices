function titleCase(str) {
    const newTitle = str.split(" ");
    // return newTitle;  [ 'I\'m', 'a', 'little', 'tea', 'pot' ]
    // 記住可以用這樣的方式操作
    // newTitle[0][0] = I
    // newTitle[3][0] = t
    const updatedTitle = [];
  
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    
    return updatedTitle.join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
  console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Here Is My Handle Here Is My Spout
  console.log(titleCase("sImoNe dE BEAUvoir")); // Simone De Beauvoir