import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = { joke: "aa" }
    this.jokeUpdater = this.jokeUpdater.bind(this);
  }

  jokeUpdater = (data) => {
    this.setState({ joke: data });
  }

  componentWillUnmount() {
    this.props.facade.facade.stopIntervalFetching();
  }

  componentDidMount() {

  const facade = this.props.facade;
  // Strategy one
  // facade.getJokeViaCallback(this.jokeUpdater)

  // Strategy two
  facade.setObserver(this.jokeUpdater);
  facade.getJokeContiniuesly(5000);
  facade.getJokeAndNotify()
  }

 /* async componentDidMount() {
    const facade = this.props.facade;
    const joke = await facade.fetchAsync();
    this.setState({ joke });
  } */


  render() {
    return (
      <div className="App">
        {this.state.joke}
      </div>
    );
  }
}


export default App;
