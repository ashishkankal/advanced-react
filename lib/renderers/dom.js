import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

// const initialData = {
//   articles: {},
//   authors: {}
// };
ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
