import React from 'react';
import ReactDOM from 'react-dom';
import times from 'lodash/times';
import './index.css';
import AppGroup from './AppGroup';;
//import * as serviceWorker from './serviceWorker';

const styles = {display: "flex",
               alignItems: "center",
               justifyContent: "space-around"};

const maxNum = document.body.clientWidth / 200;

const group = () => maxNum > 6 ? times(6, () => <AppGroup/>) : times(maxNum, () => <AppGroup/>);

ReactDOM.render(<div style={styles}>
                  {group()}
                </div>
        , document.getElementById('helloDiv'));

//Trading

//serviceWorker.unregister();
