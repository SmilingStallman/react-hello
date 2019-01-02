import React, { Component } from 'react';
import Time from './Time';
import './App.css';

class App extends Component {
  render() {
    return this.selectType();
  }

  selectType(){

    let Elm = <h1 style={{color:'green', border: '3px solid black', backgroundColor: 'black', textAlgin: 'center'}}>Hello world</h1>;
    let Feel = <h1>Let go</h1>;
    let Belm = <h1>Be kind</h1>;
    let Relm = <img src={this.props.url} height="200px" width="200px" alt="hello world"></img>

    //tests theType property passed in by creating object, then uses that to decide what type of App to return
    switch(this.props.theType){
      case "Elm":
        return(
          <div>
            <h3>{this.props.theType.toString()}</h3>
            {Elm}
            <Time />
          </div>
        );
      case "Feelit":
        return (
          <div>
            {Elm}
            {Relm}
            {Elm}

          </div>
        );
      default:
        return (
          <div>
            {Belm}
            {Relm}
            {Feel}
            {Belm}
          </div>
        );
      }
  }
}

export default App;
