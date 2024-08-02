import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 设置移动端适配 指定视口宽度 除以几视口的宽度就是多少rem 现在我们设置视口总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

