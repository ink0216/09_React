import React from 'react';
import ReactDOM from 'react-dom/client'; //ReactDOM == virtual DOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import는 js에서도 할 수 있다.

const root = ReactDOM.createRoot(document.getElementById('root'));
//virtual DOM이 적용될 요소가 누구야?
//root라는 아이디 가진 요소가 리액트가 적용될 부분이다.
root.render( //render == 읽어온 것 가지고 화면 만드는 것
  //<React.StrictMode>  리액트 검사용 태그인데 오류가 가끔 나서 지워도 된다
    <App /> //App을 랜더링함 //App.js 파일을 가져온거다
  // </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
