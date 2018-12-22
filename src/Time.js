import React, { Component } from 'react';

class Time extends Component {
  //Constructor creates time value and starts update method
  constructor(props){
    super(props);
    this.state = {time: (new Date()).toLocaleString()};
    this.startTime();   //starts time when class created
  }

  //updates time every second
  startTime(){
    setInterval(() => {this.setState({time: (new Date()).toLocaleString()})}, 1000);
  }

  //Time component with time value that updates every second is rendered
  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Time;
