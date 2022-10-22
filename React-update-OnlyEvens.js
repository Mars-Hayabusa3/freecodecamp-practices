// Task: 按button，偶數次才顯現數字

class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
      // 偶數次，update: true
      if (nextProps.value % 2 == 0) {
        return true;
      } 
      // 其餘（奇數次），update: false
      return false;
    }
    componentWillReceiveProps(nextProps) {
      console.log('Receiving new props....');
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    // 偶數才會 update -> 才會在 clg 中顯示 re-rendered
    render() {
      return <h1>{this.props.value}</h1>;
    }
  }
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState(state => ({
        value: state.value + 1
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
  }