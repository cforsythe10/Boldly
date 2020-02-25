import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Styles/Survey9Styles';
import { Colors } from '../../Themes';

export default class Survey9 extends Component {
  	constructor(props){
  		super(props);
  	}
  	
  	render() {	
		return (
		<View style={{ height: '100%',  backgroundColor: '#000000' }}>
			<Text style={{ color: Colors.fog }}>9</Text>
		</ View>
	  )
	}
}