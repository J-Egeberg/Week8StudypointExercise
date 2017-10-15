const URL = "http://api.icndb.com/jokes/random";


class JokesFacade {

// Strategy 1
    getJokeViaCallback = (cb) => {
        fetch(URL)
            .then(function (res) {
                return res.json();
            }).then(function (data) {
                let joke = data.value.joke
                if (cb) {
                    cb(joke);
                }
            });
    }

// Strategy 2
    getJokeAndNotify = () => {
        fetch(URL)
            .then(function (res) {
                return res.json();
            }).then((data) => {
                let joke = data.value.joke
                if (this.handler) {
                    this.handler(joke);
                };
            });
    }
    setObserver(handler) {
        this.handler = handler;
    }

// Strategy 3
  getJokeContiniuesly = (time) => {
    this.timerId = setInterval(this.getJokeAndNotify, time);
  }
  stopIntervalFetching = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

/*/ Strategy 4 (yellow/red)
  async fetchAsync() {
    const response = await fetch(URL);
    const res =  await response.json();
    return res.value.joke;
  } */


}


export default new JokesFacade();