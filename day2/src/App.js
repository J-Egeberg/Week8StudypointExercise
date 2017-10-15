import React, { Component } from 'react';
import './App.css';

function App (props) {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">{props.title}</h1>
        </header>
        <p className="App-intro">
            {props.txt}
        </p>
      </div>
    );
}

export default App;