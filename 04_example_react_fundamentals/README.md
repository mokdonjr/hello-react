# global dependency 설치
<code>npm install -g []</code>
## webpack, webpack-dev-server
<code>npm install -g webpack webpack-dev-server</code>

# node project init
<code>npm init</code>

# dependency --save 를 넣어 추가시 package.json 에 작성됨
<code>npm install --save []</code>
## react 설치
<code>npm install --save react react-dom</code>

# dependency --save-dev 를 넣어 추가시 개발 과정에서 필요한 패키지로 설치
<code>npm install --save-dev []</code>
## babel : es6,jsx 문법을 사용하게 해주는 모듈
<code>npm install --save-dev babel-core babel-loader babel-preset-ex2015 babel-preset-react</code>
## react-hot-loader : 개발서버 실행중 react 컴포넌트 변경시 해당 컴포넌트만 갱신해주는 모듈
## webpack : 브라우저상 import(require) 을 지원, 빌드 툴
## webpack-dev-server : 서버 구축 없이 static 파일을 다루은 웹서버를 열고 hot-loader를 통해 코드 수정시 자동 리로드
<code>npm install --save-dev react-hot-loader webpack webpack-dev-server</code>