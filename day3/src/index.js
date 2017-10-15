import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ListDemo from './ListDemo';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ListDemo />, document.getElementById('root'));
registerServiceWorker();
