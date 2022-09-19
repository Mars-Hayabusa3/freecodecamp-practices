// 2021年9月19日
// freeCodeCamp > Front End Development Libraries > React 第12題

class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
            <Fruits/>
            <Vegetables/>
        </div>
      );
    }
  };
  
  ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"));
  // 注意 getElementById 不要加 #