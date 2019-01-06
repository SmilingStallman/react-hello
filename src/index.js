import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppGroup from './AppGroup';;
//import * as serviceWorker from './serviceWorker';


//set HelloWorld with 1, 2, or 3 <AppGroup/> components based on viewport size
function HelloWorld(){
  if(document.documentElement.clientWidth <= 400)
    return <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
      <AppGroup/></div>;

  else if(document.documentElement.clientWidth <= 615)
    return <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
      <AppGroup/><AppGroup/></div>;

  else
    return <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
      <AppGroup/><AppGroup/><AppGroup/></div>;
}
ReactDOM.render(HelloWorld(), document.getElementById('helloDiv'));

//Trading

//serviceWorker.unregister();
