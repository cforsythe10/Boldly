import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';

import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';

import Logo from '../../Images/Icons/logosvg-final.svg';

import styles from './Styles/SurveyCreatorExtra1Styles';
import { Colors } from '../../Themes';

export default class SurveyCreatorExtra2 extends Component {
	constructor(props){
  		super(props);
  		console.log(new Date());
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
  			showContinue: false,
  			setDate: new Date(),
  			showDatePicker: true
  		}
  	}

  	dateChanged(date) {
  		this.setState({ ...this.state, setDate: date, showContinue: true, showDatePicker: false });
  	}

  	render() {
  		const nextSurveyState = {...this.state.currentState, interests: ['test1', 'test2', 'test3']};
		const date = this.state.setDate;
		return (
		<View style={ styles.fullScreen } >
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.goBack()} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				{this.state.showDatePicker ?
					<DateTimePicker display={'spinner'} value={ date } onChange={(event, date) => this.dateChanged(date)} /> :
					<Text style={styles.text} >{this.state.setDate.toString()}</Text>
				}
				{this.state.showContinue ?
					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey7', {...nextSurveyState, DOB: this.state.setDate.toString()})} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}