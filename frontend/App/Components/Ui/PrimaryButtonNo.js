import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/PrimaryButtonCircleStyles'
import ExamplesRegistry from '../../Services/ExamplesRegistry'

export default class PrimaryButtonNo extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    return (
      {...this.props},
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>✕</Text>
      </TouchableOpacity>
    )
  }
}
