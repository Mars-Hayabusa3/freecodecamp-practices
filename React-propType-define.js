// 2021年9月19日
// freeCodeCamp > Front End Development Libraries > React 第17題
// 定義 props 需要是那種數字種類

Items.propTypes = {
    quantity: PropTypes.number.isRequired
  }
  // 定義 PropType expect to be 數字
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };