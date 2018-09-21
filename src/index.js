import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import stores from './stores';
import {Provider} from 'mobx-react';

const {...storesArray} = stores;
ReactDom.render(
    <Provider {...storesArray}>
        <App />
    </Provider>
, window.root);
if(module.hot){
    module.hot.accept();
}
