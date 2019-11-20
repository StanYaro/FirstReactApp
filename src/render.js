import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './Redux/state';
import {BrowserRouter, Route} from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost= {addPost} />
    </BrowserRouter>, document.getElementById('root'));
}