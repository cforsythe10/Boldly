import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import IconButton from '../../Components/Ui/IconButton';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';

import Logo from '../../Images/Icons/logosvg-final.svg';

import styles from './Styles/Survey4Styles';
import { Colors } from '../../Themes';

export default class Survey4 extends Component {
	constructor(props){
  		super(props);
  		this.state = {
  			currentState: {
  				isCreator: props.navigation.state.params.isCreator,
  				name: props.navigation.state.params.name,
  				isECommerse: null,
  				location: '',
  				industries: [],
  				values: [],
  				interests: [],
  				DOB: '',
  				email: '',
  				password: '',
  			},
  			showContinue: false,
  			showlocation: props.navigation.state.params.isCreator
  		}
  	}

  	_textChanged(text){
  		this.setState({...this.state, currentState: {...this.state.currentState, location: text}, showContinue: true});
  	}

  	render() {
  		const nextSurveyState = {...this.state.currentState};
		return (
		<View style={ styles.fullScreen } onResponderGrant={(event) => this.props.navigation.navigate('Survey4', {...this.state.currentState})} onStartShouldSetResponder={ (event) => [true|false]}>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.goBack()} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				{!nextSurveyState.isCreator ?
					<IconButton svgName='BrickAndMortarImage' text='Brick & Mortar' /> : null
				}
				{!nextSurveyState.isCreator ?
					<IconButton svgName='ECommerceImage' text='E-Commerce' /> : null 
				}
				{nextSurveyState.isCreator || !nextSurveyState.isECommerse ?
					<TextFieldDarkBG placeholder='Location' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} /> : null
				}
				{this.state.showContinue ?
					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey5', {...nextSurveyState})} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}