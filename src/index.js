import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
ReactDom.render(<App />, window.root);
if(module.hot){
    module.hot.accept();
}
