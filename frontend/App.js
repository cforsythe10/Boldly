import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Navigator from './App/Navigation/Navigator'
import initStore from './App/Redux/CreateStore';

const store = initStore();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}