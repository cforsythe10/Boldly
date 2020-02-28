import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import Header from '../../Components/Ui/Header';

import Happy from '../../Images/Icons/SurveyIcons_happy.svg';

import styles from './Styles/Survey3Styles';
import { Colors } from '../../Themes';

export default class Survey3 extends Component {
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
  			showContinue: false
  		}
  	}

  	render() {
		return (
		  <View style={ styles.fullScreen } onResponderGrant={(event) => this.props.navigation.navigate('Survey4', {...this.state.currentState})} onStartShouldSetResponder={ (event) => [true|false]}>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
          <Header headerType='Survey' navigation={ this.props.navigation } />
  				<Text style={ styles.text } >It's nice to meet you,</Text>
				  <Text style={ styles.text } >{this.state.currentState.name}!</Text>
				  <Happy height={60} width={60} stroke={Colors.fog} />
			  </ LinearGradient>
		  </ View>
	  )
	}
}