import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import DatePicker from '../../Components/Ui/DatePicker';

import Logo from '../../Images/Icons/logosvg-final.svg';

import styles from './Styles/SurveyCreatorExtra1Styles';
import { Colors } from '../../Themes';

const [date, setDate] = useState(new Date());

export default class SurveyCreatorExtra2 extends Component {
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
  				interests: [],
  				DOB: '',
  				email: '',
  				password: '',
  			},
  			showContinue: true
  		}
  	}

  	dateCallback = (data) => {
  		console.log('test');
  	}

  	render() {
  		const nextSurveyState = {...this.state.currentState, interests: ['test1', 'test2', 'test3']};
  		let DP = DatePicker(this.dateCallback);
		return (
		<View style={ styles.fullScreen } >
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.goBack()} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				<DP  />
				{this.state.showContinue ?
					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey7', {...nextSurveyState})} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}