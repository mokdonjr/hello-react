class Counter extends React.Component {
  
  // state는 반드시 생성자로 초기화되어야함
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  // 버튼이 눌렸을때 실행될 메서드
  handleClick() {
    this.setState({
      value: this.state.value + 1
    });
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        {/*버튼 클릭시 호출 메서드는 onClick*/} 
        <button onClick={this.handleClick}>Press Me</button>
      </div>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);