import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MyFile from './MyFile'

ReactDOM.render(<MyFile />, document.getElementById('root'));
registerServiceWorker();
