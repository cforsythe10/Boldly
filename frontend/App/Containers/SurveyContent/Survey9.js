import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../../Images/Icons/logo-fog.svg';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';

import styles from './Styles/Survey9Styles';
import { Colors, Fonts } from '../../Themes';

export default class Survey9 extends Component {
	constructor(props){
  		super(props);
  		console.log(props.navigation.state.params);
  		this.state = {
  			email: props.navigation.state.params.email,
  			password: props.navigation.state.params.password,
  			showContinue: false
  		}
  	}

  	/* WILL NEED THIS
		login(){
	
		}
  	*/

  	render() {
		return (
		<View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				
				<View style={styles.logoContainer}>
					<Logo height={30} width={70} />
				</View>

				<View style={styles.contentContainer}>
					<Text style={ styles.text } >Connect your social media</Text>
					<PrimaryButtonLarge text='Dummy Component' onPress={() => this.setState({...this.state, showContinue: !this.state.showContinue})} />
					<Text style={ styles.link } onPress={() => this.props.navigation.navigate('Dashboard')} >Skip for now</ Text>
				</View>

				<View style={styles.continueContainer}>
					{this.state.showContinue ?
						<PrimaryButtonLarge text='Go to Dashboard' onPress={() => this.props.navigation.navigate('Dashboard')} /> : null
					}
				</View>

			</ LinearGradient>
		</ View>
	  )
	}
}