// 2022年9月22日
// freeCodeCamp > Front End Development Libraries > React 第21題

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
      const stateName = this.state.name;
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
          {stateName} // freeCodeCamp
          { /* Change code above this line */ }
        </div>
      );
    }
  };