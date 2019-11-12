import React, { Component } from 'react';
import App from './App';

class AppGroup extends Component {

  render(){
    return(
      <div>
        <App theType='Elm'/>
        <App theType='Belm' url='images/lainlines.gif'/>
        <App theType='Elm'/>
        <App theType='Feelit'url='images/grid-glitch-a.gif'/>
      </div>
    );
  }
}

export default AppGroup;
