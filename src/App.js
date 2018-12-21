import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let Elm = <h1>Hello world</h1>;
    let Feel = <h1>I FEEL IT</h1>;
    let Belm = <h1>REEEEE</h1>;
    let Relm = <img src={this.props.url} height="200px" width="200px"></img>

    //tests theType property passed in by creating object, then uses that to decide what type of App to return
    switch(this.props.theType){
      case "Elm":
        return(
          <div>
            <h3>{this.props.theType.toString()}</h3>
            {Elm}
            {new Date().toLocaleString()}
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
