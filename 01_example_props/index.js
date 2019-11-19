class Codelab extends React.Component {
  // 모든 리액트 컴포넌트는 render 함수를 가진다
  // 컴포넌트가 어떻게 생겼는지를 정의
  // JSX : javascript에서 html을 그대로 작성할 수 있음
  // ES6를 ES5로 호환해주는 Babel이 JSX를 지원. ES6문법이 아님.
  render() {
    // 변수는 var, let 모두 가능하나 let을 권고
    let text = "Hi seungchan";
    // css 작성 가능
    let mystyle = {
      backgroundColor: 'aqua'
    };
    return (
      // 여러개 태그가 필요하다면 Container element 가 필요
      // ex. <div><h1>qwer</h1><p>asdf</p></div>
      // javascript, css 를 넣을땐 { } 이용.
      <div>
        <div style={mystyle}>{text}</div>
        <h1>Hello {this.props.name}</h1>
        <div>{this.props.children}</div>
      </div>
      
    );
  }
}

class App extends React.Component {
  render() {
    return (
      //<Codelab/>
      //<Codelab name="seungchan">이사이내용</Codelab>
      <Codelab name={this.props.name}>
        {this.props.children}
      </Codelab>
    );
  }
};

// 컴포넌트를 렌더링
// JSX 코드를 렌더링해줌.
ReactDOM.render(<App name="seungchan">자식</App>
  , document.getElementById('root'));