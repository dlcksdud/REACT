import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App_component.js';
// import App from './App_state.js';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
/**
 * react 기본 setting
 * /**
 * index.js의 역할을 index.html 파일과 App.js를 연결하는 것
 * 따라서 우리가 할 모든 작업은 App.js에 들어간다.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
