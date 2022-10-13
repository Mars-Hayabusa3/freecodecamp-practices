class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500); // 2.5 秒後顯示
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers}</h1>
          {/* 先建立這個骨架，再從didMount (還有sto) 讀取數字 */}
        </div>
      );
    }
  }