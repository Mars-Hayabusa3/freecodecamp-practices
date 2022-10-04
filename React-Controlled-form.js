// 2022/10/4
// freeCodeCamp > React 教程
// setState / onChange / onSubmit 綜合練習

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // Change code below this line
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
      // Change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
            <input onChange={this.handleChange} value={this.state.input} />
            {/* Change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* Change code below this line */}
          <h1>{this.state.submit}</h1>
          {/* 要 .submit 而不是 .input!! 要 submit 之後才能在這邊顯示 */}
        </div>
      );
    }
  }