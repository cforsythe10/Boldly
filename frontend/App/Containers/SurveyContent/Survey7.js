import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';

import Logo from '../../Images/Icons/logosvg-final.svg';

import styles from './Styles/Survey7Styles';
import { Colors } from '../../Themes';

export default class Survey7 extends Component {
  	constructor(props){
  		super(props);
  		this.state = {
  			currentState: {
  				isCreator: props.navigation.state.params.isCreator,
  				name: props.navigation.state.params.name,
  				isECommerse: props.navigation.state.params.isECommerse,
  				location: props.navigation.state.params.location,
  				industries: props.navigation.state.params.industries,
  				values: props.navigation.state.params.values,
  				interests: props.navigation.state.params.interests,
  				DOB: props.navigation.state.params.DOB,
  				email: '',
  				password: '',
  			},
  			showContinue: false
  		}
  	}

  	_textChanged(val) {
  		let isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
  		this.setState({ currentState: {...this.state.currentState, email: val}, showContinue: isEmail});
  	}

  	render() {
  		const nextSurveyState = {...this.state.currentState};
		return (
		<View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.goBack()} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				<Text style={ styles.text } >Alright, you're almost there!</ Text>
				<Text style={styles.text }>What email would you like to be associated with this account?</ Text>
				<TextFieldDarkBG placeholder='Email Address' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} />
				{this.state.showContinue ?
					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey8', {...nextSurveyState})} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}