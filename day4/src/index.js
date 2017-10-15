import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import jokeFacade from './jokeFacade';

ReactDOM.render(<App facade={jokeFacade} />, document.getElementById('root'));
registerServiceWorker();
