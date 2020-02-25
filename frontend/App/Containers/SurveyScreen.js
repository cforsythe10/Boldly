import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Wave from '../Images/Icons/SurveyIcons_wavingHand.svg';

import styles from './Styles/SurveyScreenStyles';
import { Colors } from '../Themes';

export default class SurveyScreen extends Component {
  	render() {
		return (
		<View style={{ height: '100%',  backgroundColor: '#000000'}} onResponderGrant={(event) => this.props.navigation.navigate('Survey1')} onStartShouldSetResponder={ (event) => [true|false]}>
			<Text style={ styles.text } >Welcome!</Text>
			<Wave height={60} width={60} stroke={Colors.fog} />
		</ View>
	  )
	}
}