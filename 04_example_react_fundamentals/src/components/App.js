import React from 'react';
{/*var React = require('react'); 의 ES6형이 import이다*/}

class App extends React.Component {
	render() {
		return (
			<h1>Hello</h1>
		);
	}
}

export default App;
{/*module.export = App; 의 ES6형이다
App 클래스를 다른 곳에서도 불러올 수 있도록 export 함*/}