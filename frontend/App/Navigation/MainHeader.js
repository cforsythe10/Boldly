import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

import HamburgerNavButton from '../Components/Navigation/HamburgerNavButton';
import RoundedButton from '../Components/Ui/RoundedButton';

import styles from './Styles/MainHeaderStyles'

export default class MainHeader extends Component {
	handleClick() {
		this.props.navigation.openDrawer()
	}

	openProfile() {
		this.props.navigation.navigate('Profile');
	}

	render() {
		return (
			<View style = { styles.container } >
				{/* <RoundedButton text="Nav Menu" onPress = {() => this.handleClick()} /> */}
				{/* <Button title="Profiles" onPress = {() => this.openProfile()} /> */}
			</ View>
		);
	}
}