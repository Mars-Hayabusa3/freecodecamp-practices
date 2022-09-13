// 評價：類似 useState 或 react components constructor,
// 越來越往 react 靠攏了

// Only change code below this line
class Thermostat{
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
  
    // getter
    get temperature() {
      return (this.fahrenheit - 32) * 5/9;
    }
  
    // setter
    set temperature(celsius) {
      this.fahrenheit = celsius * 9/5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  console.log(temp)