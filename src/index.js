import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ShoppingList from './components/shoppingList';
import reportWebVitals from './reportWebVitals';
import App from './components/api/app';
import HelloReact from './components/helloReact';
import Table from './components/table';
import Main from './components/main';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('subTop')
);

ReactDOM.render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>,
  document.getElementById('top')
);

ReactDOM.render(
  <React.StrictMode>
    <HelloReact />
  </React.StrictMode>,
  document.getElementById('chield2')
);


ReactDOM.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>,
  document.getElementById('ttt')
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
