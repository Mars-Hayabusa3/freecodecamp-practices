// 2021年9月19日
// freeCodeCamp > Front End Development Libraries > React 第10, 11題

// 第10題
// React 的子元件包兩層會如何

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
  <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
    <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

// -----------------------------

// 第11題
// 從別處 import 元件

// import Citrus, NonCitrus from './XXXXX';

class FruitsB extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
      <NonCitrus />
      <Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <FruitsB />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};