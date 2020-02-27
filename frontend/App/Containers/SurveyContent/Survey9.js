import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../../Images/Icons/logosvg-final.svg';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';

import styles from './Styles/Survey9Styles';
import { Colors, Fonts } from '../../Themes';

export default class Survey9 extends Component {
	constructor(props){
  		super(props);
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
		<View style={ styles.fullScreen } onResponderGrant={(event) => this.props.navigation.navigate('Survey4', {...this.state.currentState})} onStartShouldSetResponder={ (event) => [true|false]}>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.goBack()} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				<Text style={ styles.text } >Connect your social media</Text>
				<Text onPress={() => this.setState({...this.state, showContinue: !this.state.showContinue})}>Will be implemented with backend integration</Text>
				<Text style={ styles.link } onPress={() => this.props.navigation.navigate('Dashboard')} >Skip for now</ Text>
				{this.state.showContinue ?
					<PrimaryButtonLarge text='Go to Dashboard' onPress={() => this.props.navigation.navigate('Dashboard')} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}