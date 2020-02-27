import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';

import Logo from '../../Images/Icons/logosvg-final.svg';

import styles from './Styles/Survey2Styles';
import { Colors } from '../../Themes';

export default class Survey2 extends Component {
  	constructor(props){
  		super(props);
  		this.state = {
  			currentState: {
  				isCreator: props.navigation.state.params.isCreator,
  				name: '',
  				isECommerse: null,
  				location: '',
  				industries: [],
  				values: [],
  				interests: [],
  				DOB: '',
  				email: '',
  				password: '',
  			},
  			showContinue: false
  		}
  	}

  	_textChanged(val) {
  		let isName = /^[A-Za-z ,.'-]+ [A-Za-z ,.'-]/.test(val);
  		if(this.state.currentState.isCreator) this.setState({ currentState: {...this.state.currentState, name: val}, showContinue: isName});
      else this.setState({ currentState: {...this.state.currentState, name: val}, showContinue: true})
  	}

  	render() {
  		const nextSurveyState = {...this.state.currentState};
		return (
		<View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.goBack()} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				<Text style={ styles.text } >{this.state.currentState.isCreator ? 
					'What is your name?':
					'What is the name of your brand?'}</ Text>
				<Text style={styles.subtext }>{this.state.currentState.isCreator ?
					'This is how you will appear to brands' :
					'This is how you will appear to creators'}</ Text>
        {this.state.currentState.isCreator ?
				  <TextFieldDarkBG placeholder='Firstname Lastname' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} /> :
				  <TextFieldDarkBG placeholder='Name' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} />
        }
        {this.state.showContinue ?
					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey3', {...nextSurveyState})} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}