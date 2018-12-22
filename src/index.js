import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppGroup from './AppGroup';
import PicArray from './PicArray';
//import * as serviceWorker from './serviceWorker';

//HelloWorld
ReactDOM.render(
  <div style={{display: "flex",
              alignItems: "center",
              justifyContent: "space-around"}}>
    <AppGroup/>
    <AppGroup/>
    <AppGroup/>
  </div>, document.getElementById('helloDiv'));

//Trading
ReactDOM.render(<PicArray/>, document.getElementById('pic-array'));

//serviceWorker.unregister();
