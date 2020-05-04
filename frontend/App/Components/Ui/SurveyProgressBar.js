import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import ProgressBar from 'react-native-progress/Bar';
import { Colors } from '../../Themes/'

export default class SurveyProgressBar extends Component {
  static propTypes = {
    progress: PropTypes.number // this must be a decimal value between 0 and 1
  }

  render () {
    return (
      <View>
      <ProgressBar progress={this.props.progress} width={328} height={5} 
      color={Colors.white} unfilledColor={Colors.white35} borderWidth={0} />
      </View>
    )
  }
}
