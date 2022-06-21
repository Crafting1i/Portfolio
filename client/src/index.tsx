import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

document.addEventListener('scroll', (e) => {
  const header = document.querySelector('header');
  if(!header) return;
  if (window.scrollY > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
})

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
