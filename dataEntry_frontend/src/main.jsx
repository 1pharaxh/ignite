import React from 'react'
import ReactDOM from 'react-dom'
import './static/css/index.css'
import App from './App'
import { inject } from '@vercel/analytics';

inject();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
