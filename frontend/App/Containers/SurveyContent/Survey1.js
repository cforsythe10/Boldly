import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../../Images/Icons/logosvg-final.svg';

import RadioIconButton from '../../Components/Ui/RadioIconButton';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';

import styles from './Styles/Survey1Styles';
import { Colors } from '../../Themes';

export default class Survey1 extends Component {
	constructor(props){
		super(props);
		this.state = {
			surveyInfo: {
  				isCreator: null,
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
  			brandSelected: false,
  			creatorSelected: false
		}
	}

	actionCreator = () => {
		console.log(this.state);
		this.refs.creator.changeState();
		if(!this.state.creatorSelected){
			if(this.state.brandSelected) this.refs.brand.changeState();	
		}
	}

	actionBrand = () => {
		console.log(this.state);
		this.refs.brand.changeState();
		if(!this.state.brandSelected){
			if(this.state.creatorSelected) this.refs.creator.changeState();	
		}
	}

	callbackCreator = (data) => {
  		this.setState({creatorSelected: data});
  	} 

  	callbackBrand = (data) => {
  		this.setState({brandSelected: data});
  	}

	render() {
		const nextSurveyState = {...this.state.surveyInfo};
		return (
		<View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.navigate('Default')} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				<Text style={ styles.text }>Are you a...</Text>
				<RadioIconButton onPress={this.actionCreator} ref='creator' svgName='CreatorImage' text='Creator' callback={this.callbackCreator} />
				<RadioIconButton onPress={this.actionBrand} ref='brand' svgName='BrandImage' text='Brand' callback={this.callbackBrand} />
				{this.state.creatorSelected || this.state.brandSelected ?
					<PrimaryButtonLarge text='Continue' onPress={() => {
						nextSurveyState.isCreator = this.state.creatorSelected;
						this.props.navigation.navigate('Survey2', {...nextSurveyState} );
					}} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}