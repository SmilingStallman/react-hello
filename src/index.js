import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppGroup from './AppGroup';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppGroup />, document.getElementById('content'));
ReactDOM.render(<AppGroup />, document.getElementById('right-content'));
ReactDOM.render(<AppGroup />, document.getElementById('left-content'));

console.log(React.DOM);
//serviceWorker.unregister();
