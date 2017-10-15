import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

export default class ListDemo extends Component{
  constructor(){
    super();
    this._data = [
      {"number": 16},
      {"number": 17},
      {"number": 18},
      {"number": 19},
]
  }
    render(){
        return(
          <div>
          <NumberList numbers={[1,2,3,4,5]}/>          
          </div>  
        );
    }
}