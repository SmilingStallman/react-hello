import React, { Component } from "react";

class Time extends Component {
  //Constructor creates time value and starts update method
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  //sets time to update every second
  componentDidMount() {
    this.clock = setInterval(
      () => this.timeChange(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  //updates time
  timeChange() {
    this.setState({ time: new Date() });
  }

  //Time component with time value that updates every second is rendered
  render() {
    return <div>{this.state.time.toUTCString()}</div>;
  }
}

export default Time;
