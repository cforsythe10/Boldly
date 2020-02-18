import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from 'react-native-progress/Bar'
import { Colors } from '../../Themes/'

export default class SurveyProgressBar extends Component {
  state = {
    progress: 0
  }

  render () {
    return (
      <ProgressBar progress={0.5} width={100} height={30} 
      color=Colors.white unfilledColor=Colors.fog borderWidth={0} />
    )
  }
}
