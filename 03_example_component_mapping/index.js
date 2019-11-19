class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        {/*contact를 객체로 받아오기 가능*/}
        {this.props.contact.name}
        {this.props.contact.phone}
      </div>
    );
  }
}

class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        {name: 'Abet', phone: '010-0000-0001'},
        {name: 'Bbet', phone: '010-0000-0002'},
        {name: 'Cbet', phone: '010-0000-0003'},
        {name: 'Dbet', phone: '010-0000-0004'}
      ]
    }
  }
  
  render() {
    
    // const는 상수 (ES6)
    // => 는 arrow function (ES6)
    const mapToComponent = (data) => {
      // arr.map(callback, [thisArg])
      // callback 은 currentValue, index, array 로 이루어짐
      // contact가 currentValue, index가 i
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    };
    return (
      // <div>
      //   <div>Abet 010-0000-0001</div>
      //   <div>Bbet 010-0000-0002</div>
      //   <div>Cbet 010-0000-0003</div>
      //   <div>Dbet 010-0000-0004</div>
      //   <div>Ebet 010-0000-0005</div>
      // </div>
      <div>
        {/*javascript 함수 호출하려면 { } 안에 넣으면됨*/}
        {mapToComponent(this.state.contactData)}
      </div>
    );
  }
}

class App extends React.Component {
  
  render() {
    return (
      <Contact/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);