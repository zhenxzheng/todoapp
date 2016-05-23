import React from 'react';
// import { Component } from 'react';
import ReactDom from 'react-dom';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
// import remoteActionMiddleware from './remote_action_middleware';
import promiseMiddleware from 'redux-promise-middleware';

// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';


window.nextTodoId = 0;

// fetch('https://api-bundle-dev.azurewebsites.net/bundle?offset=0&pagesize=5&sortoption=EventDate&sortdirection=Ascending')
// // fetch('https://graph.facebook.com/me?fields=id,email,jfirst_name,last_name,gender,link,locale,name,verified,picture.type(large),birthday,timezone&access_token=CAACEdEose0cBAMBNA416oRwj2JYLtb3dBSLZB3h0MIRGDBCAsUhhT8xERfwdlEU5S9W9BnKwAm4H8pGcEEq6D7PpyNmzt675TT2GEjKc2Pjxj7xUZCwFZB3BYpeOIWS6OozsnWgD7zxw1snSrFyqowPDUzhzSLSDxmAN4F5I8CgEio7s55pqvV1sZCgXKNIQX3FYBZBFrEAZDZD')
//  .then( function (response) {
//    console.log(response);
//    if (response.status >= 400) {
//      throw new Error('Bad response from server');
//    }
//    return response.json();
//  })
//  .then( function(response) {
//    console.log(response);
//  });
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDom.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);