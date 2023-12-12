import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

var name=<h1 style={{color:"blue"}}>Hello World</h1>   //Inner flower bracket is used for object and outter flower bracket is experssion 
// var name1= "hello";
// const display=<div><h1>Hi {3+3}</h1><p>hello</p></div>
// var display1=<ol start={5} type="i">
// <li>tn</li>
// <li>ka</li>
// <li>ap</li>

// </ol>

// const age=49;
// var display =<h1> { (age>18) ?"eligible" : "not eligible"}</h1>;
// if(age > 19){
//   <h1>eligibel</h1>
// }
// else{
  
//   <h1>Not eligibel</h1>

// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
