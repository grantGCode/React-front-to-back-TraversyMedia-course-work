import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const root = document.getElementById('root');
const rootRenderer = ReactDOM.createRoot(root);

rootRenderer.render(
    <React.StrictMode> 
    <App />
    </React.StrictMode>,
);