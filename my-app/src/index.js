import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="app">
      <Weather />
    </div>
  );
  }
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
