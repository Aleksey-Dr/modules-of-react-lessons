import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import MyFunctionalComponent from './MyFunctionalComponent';
// import User from './User';
import Books from './Books';

// const link = <a href="https://reactjs.org/">React website</a>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyFunctionalComponent /> */}
    {/* <User /> */}
  <Books />
  </React.StrictMode>
);

// console.log(MyFunctionalComponent);
// console.log(Text);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
