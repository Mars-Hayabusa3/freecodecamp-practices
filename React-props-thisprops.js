class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name="Clara" />
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Hello, Clara! */ }
          </div>
      );
    }
  };