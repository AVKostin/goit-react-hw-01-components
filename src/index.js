// import React from 'react';
import ReactDOM from 'react-dom';

// const elem1 = React.createElement('span', { children: 'Привет' });
// const elem2 = React.createElement('span', { children: 'мир' });

const elem1 = <span>Привет</span>;
const elem2 = <span>мир</span>;

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: ['Привет мир'],
// });
const jsxElements = (
  <div>
    {elem1}
    {elem2}
  </div>
);

console.log(jsxElements);

// ReactDOM.render(element, document.querySelector('#root'));

// ===== версия кодя под React 18? но ещё не точно. ======
// import React from 'react';
// import createRoot from 'react-dom/client';

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Привет мир',
// });

// console.log(element);

// const root = createRoot(element);

// console.log(root);
// ========================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
