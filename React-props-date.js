// 2021年9月19日
// freeCodeCamp > Front End Development Libraries > React 第13題
// props 傳日期給子元件

const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
        { /* Mon Sep 19 2022 15:08:31 GMT+0800 (台北標準時間) */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()} />
        </div>
      );
    }
  };