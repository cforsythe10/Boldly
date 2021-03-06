import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';

import BackButton from '../../Images/Icons/back.svg';
import Logo from '../../Images/Icons/logo-fog.svg';

import styles from './Styles/SurveyCreatorExtra2Styles';
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
  				interests: props.navigation.state.params.interests,
  				birthday: '',
  				email: '',
  				password: '',
  			},
  			showContinue: false,
  			setDate: new Date(),
  			showDatePicker: false
  		}
  	}

  	dateChanged(date) {
  		this.setState({ ...this.state, setDate: date, showContinue: true, showDatePicker: false });
  	}

    _renderHeader = () => {
      return (
      <View style={styles.surveyHeaderContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                  <BackButton height={20} width={20} stroke={Colors.white }/>
              </TouchableHighlight>

              <Logo height={30} width={70}/>

              <View height={20} width={20} />
          </View>
      )
    }

	delayScreen=(that)=>{
 
		setTimeout(function(){
	 
		  //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
		  that.props.navigation.navigate('Survey4', {...that.state.currentState})
	 
		}, 1200);
	 
	 
	}

  	render() {

		//this.delayScreen(this);
  	const nextSurveyState = {...this.state.currentState};
		const date = this.state.setDate;
		return (
		  <View style={ styles.fullScreen } >
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
  				{this._renderHeader()}

          <View style={styles.contentContainer}>
            <ProgressBar progress={7/10} />
    				{this.state.showDatePicker ?
    					<DateTimePicker display={'spinner'} mode={"date"} value={ date } onChange={(event, date) => this.dateChanged(date)} /> :
    					<View style={styles.contentContainer}><Text style={styles.text} >What is your birthday?</Text>
						{this.state.showContinue ?
							<Text style={styles.text} >{this.state.setDate.toDateString()}</Text>: null
	  					}
						<PrimaryButtonLarge text='Set Birthday' onPress={() => this.setState({...this.state, showDatePicker: !this.state.showDatePicker})} /></View>
    				}
          </View>

          <View style={styles.continueContainer}>
    				{this.state.showContinue ?
    					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey7', {...nextSurveyState, DOB: this.state.setDate.toString()})} /> : null
    				}
          </View>
  			</ LinearGradient>
  		</ View>
	  )
	}
}
