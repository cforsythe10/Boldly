import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Styles/Survey7Styles';
import { Colors } from '../../Themes';

export default class Survey7 extends Component {
  	render() {
		return (
		<View style={{ height: '100%',  backgroundColor: '#000000' }}>
			<Text style={{ color: Colors.fog }}>7</Text>
		</ View>
	  )
	}
}