// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import  ReactDOM  from 'react-dom/client';
import './sass/index.scss'
import { App } from './App';

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement);
console.log(root)

root.render(<App/>)
