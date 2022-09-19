// 2021年9月19日
// freeCodeCamp > Front End Development Libraries > React 第12題
// 自己建一個 react component

// Hooks 時代之後主要用
// function MyComponent(props) {}
// props 不用自己建

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
      );
    };
  }
  
ReactDOM.render(<MyComponent/>, document.querySelector("#challenge-node"))