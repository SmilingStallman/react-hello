import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let elm = React.createElement('h1', null, 'Hello world');
    return (
      React.createElement('div', null, elm, elm, elm, elm, elm)
    );
  }
}

export default App;
