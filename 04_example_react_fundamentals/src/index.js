import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
{/*components 디렉터리 하위 App 컴포넌트를 불러옴*/}

const rootElement = document.getElementById('root');
ReactDOM.render(
	<App></App>,
	rootElement
);