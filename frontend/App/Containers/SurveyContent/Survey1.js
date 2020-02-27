import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../../Images/Icons/logosvg-final.svg';

import IconButton from '../../Components/Ui/IconButton';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';

import styles from './Styles/Survey1Styles';
import { Colors } from '../../Themes';

export default class Survey1 extends Component {
	constructor(props){
		super(props);
		this.state = {
			showContinue: false,
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
  			creatorSelected: false,
		}
	}

	callbackCreator = (data) => {
  		if(data) this.setState({ surveyInfo: {...this.state.surveyInfo, isCreator: data}});
  	} 

  	callbackBrand = (data) => {
  		if(data) this.setState({ surveyInfo: {...this.state.surveyInfo, isCreator: !data}});
  	}

	render() {
		const nextSurveyState = {...this.state.surveyInfo};
		return (
		<View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.navigate('Default')} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				<Text style={ styles.text }>Are you a...</Text>
				<IconButton ref='creator' svgName='CreatorImage' text='Creator' callback={this.callbackCreator} />
				<IconButton ref='brand' svgName='BrandImage' text='Brand' callback={this.callbackBrand} />
				{!this.state.showContinue ?
					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey2', {...nextSurveyState} )} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}