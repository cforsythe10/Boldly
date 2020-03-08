import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Navigator from './App/Navigation/Navigator'
import initStore from './App/Redux/CreateStore';
import { StatusBar } from 'react-native'
import { Colors } from './App/Themes'

const store = initStore();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={Colors.cobalt} translucent={true} barStyle="light-content" />
        <Navigator />
      </Provider>
    )
  }
}