import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';

import styles from './Styles/Survey3Styles';
import { Colors } from '../../Themes';

export default class Survey5 extends Component {
	constructor(props){
  		super(props);
  		this.state = {
  			currentState: {
  				isCreator: props.navigation.state.params.isCreator,
  				name: props.navigation.state.params.name,
  				isECommerse: props.navigation.state.params.isECommerse,
  				location: props.navigation.state.params.location,
  				industries: [],
  				values: [],
  				interests: [],
  				DOB: '',
  				email: '',
  				password: '',
  			},
  			showContinue: true
  		}
  	}

  	render() {
  		const nextSurveyState = {...this.state.currentState, industries: ['test1', 'test2', 'test3']};
		return (
		  <View style={ styles.fullScreen } >
        <LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
          <Header headerType='Survey' navigation={ this.props.navigation } />
          {nextSurveyState.isCreator ?
            <ProgressBar progress={4/10} /> :
            <ProgressBar progress={4/8} />
          }
          <Text style={ styles.text } >What industry are you in?</Text>
				  <Text>Industry picker will be implemented when designs/data are ready</Text>
				  {this.state.showContinue ?
					 <PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey6', {...nextSurveyState})} /> : null
				  }
			  </ LinearGradient>
		  </ View>
	  )
	}
}