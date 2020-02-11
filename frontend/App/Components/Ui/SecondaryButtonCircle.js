import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/PrimaryButtonCircleStyles'
import ExamplesRegistry from '../../Services/ExamplesRegistry'

// Note that this file (App/Components/Ui/PrimaryButtonSmall) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

export default class SecondaryButtonCircle extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    return (
      {...this.props},
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    )
  }
}