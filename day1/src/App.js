import React, { Component } from 'react';

import './App.css';
import upper, {text1,text2, text3} from "./dataStore1";
import Pers from "./dataStore2"; 
import Joke from "./jokesStore";
import Car from "./carsStore";

const person = Pers;


class App extends Component{
constructor(){
  super();
  Joke.addJoke("bla bla.");
}
  render() {
    return (
      <div className="App App-standard">
        <header className="App-standard">
          <h1 className="App-title">A warm welcome to React</h1>
        </header>
        <p>{upper(text1)}</p>
        <p>{upper(text2)}</p>
        <p>{upper(text3)}</p>
        <p>{upper("please uppercase me")}</p>
        <p>{person.firstName}, {person.email}</p>

        <p>{Joke.getRandomJoke()}</p>
        <p>{Joke.getRandomJoke()}</p>
        <p>{Joke.getRandomJoke()}</p>

      </div>
    );
  }
}



export default App;
