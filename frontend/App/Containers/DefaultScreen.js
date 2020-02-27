import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../Images/Icons/logosvg-final.svg';

import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';
import PrimaryButtonSmall from '../Components/Ui/PrimaryButtonSmall';

import styles from './Styles/DefaultScreenStyles';
import { Colors } from '../Themes';

export default function DefaultScreen({ navigation }) {
  return (
    <View style={ styles.fullScreen }>
    	<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
	    	<Logo height={30} width={70} stroke={Colors.fog} />
			<Text style={ styles.bigText }>Live your values.</ Text>
			<Text style={ styles.bigText }>Grow together.</ Text>
			<PrimaryButtonLarge text='Get started' onPress = {() => navigation.navigate('Survey')} />
			<Text style={ styles.smallText }>Already have an account?</ Text>
			<PrimaryButtonSmall text='Log in' onPress = {() => navigation.navigate('Login')} />
		</LinearGradient>
    </ View>
  )

}