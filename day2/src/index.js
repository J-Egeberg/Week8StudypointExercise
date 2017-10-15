import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import Clock from './Clock';
import Toggle from './Toggle'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App2 title="Jeg hedder Failalot - SIRCRITALOTOAKBERG" txt="Jeg vil gerne hjem team" />, document.getElementById('root'));
//ReactDOM.render(<Clock txt="My Cool Clock" sleepTime={3000}/>, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));
//ReactDOM.render(<App2 />,document.getElementById('root'));
ReactDOM.render(<Toggle />,document.getElementById('root'));
registerServiceWorker();