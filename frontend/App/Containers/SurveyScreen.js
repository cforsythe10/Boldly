import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Wave from '../Images/Icons/SurveyIcons_wavingHand.svg';
import Logo from '../Images/Icons/logo-fog.svg'

import styles from './Styles/SurveyScreenStyles';
import { Colors } from '../Themes';

export default class SurveyScreen extends Component {
  	render() {
		return (
		<View style={ styles.fullScreen } onResponderGrant={(event) => this.props.navigation.navigate('Survey1')} onStartShouldSetResponder={ (event) => [true|false]}>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<View style={styles.logoContainer}>
					<Logo height={30} width={70} />
				</View>
				<View style={styles.contentContainer}>
					<Text style={ styles.text } >Welcome!</Text>
					<Wave height={90} width={90} stroke={Colors.fog} />
				</View>
			</ LinearGradient>
		</ View>
	  )
	}
}