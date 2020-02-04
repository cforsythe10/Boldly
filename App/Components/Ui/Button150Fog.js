import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/Button250FogStyles'
import ExamplesRegistry from '../../Services/ExamplesRegistry'

// Note that this file (App/Components/Ui/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.


export default class Button250Fog extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  }

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}