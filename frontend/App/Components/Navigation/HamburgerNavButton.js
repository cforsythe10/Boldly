import React, { Component } from 'react'
import { View } from 'react-native'
import Drawer from 'react-native-drawer'
import styles from './Styles/HamburgerNavButtonStyles'

// Hamburger component for navigation

export default class HamburgerNavButton extends Component {
	handleClick() {
		this.props.navigation.openDrawer();
	}

	render () {
		return (
			<View onPress = {this.handleClick} >
		  		<View style={styles.lines} ></ View>
		  		<View style={styles.bottomLine} ></ View> 
		  	</ View>
		)
	}	
}
