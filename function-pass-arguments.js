// 用 Pass arguments (類似 React 所謂 pass props) 的方法來傳變數

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(value) {
  return value + 1;
  // Only change code above this line
}

// Another principle of functional programming is to always declare your dependencies explicitly.
// This means if a function depends on a variable or object being present,
// then pass that variable or object directly into the function as an argument.

// There are several good consequences from this principle.
// The function is 1.[easier to test], you know 2.[exactly what input it takes],
// and it won't depend on anything else in your program.

// This can give you more confidence when you alter, remove, or add new code.
// [You would know what you can or cannot change and you can see where the potential traps are].

// Finally, the function would always [produce the same output for the same set of inputs],
// [no matter what part of the code executes it].