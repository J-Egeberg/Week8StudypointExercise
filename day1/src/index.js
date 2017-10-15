import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import upper, {text1,text2, text3} from "./dataStore1";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
