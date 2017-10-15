import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.sleepTime
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.txt}!</h1>
                <h2>Jeg vil gerne handle {this.state.date.toLocaleTimeString()}...</h2>
            </div>
        );
    }
}

