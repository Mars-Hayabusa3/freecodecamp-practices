const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = []; // 你是初始值
  
    for (let i = 0; i < 3; i++) {
      failureItems.push(
        `<li class="text-warning">${arr[i]}</ li>`
      ) // arr[0]: no-var, arr[1]: var-on-top ...
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);