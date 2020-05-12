import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import Header from '../../Components/Ui/Header';

import Happy from '../../Images/Icons/SurveyIcons_happy.svg';
import BackButton from '../../Images/Icons/back.svg';
import Logo from '../../Images/Icons/logo-fog.svg';

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

		this.delayScreen(this);
		return (
		  <View style={ styles.fullScreen } onResponderGrant={(event) => this.props.navigation.navigate('Survey4', {...this.state.currentState})} onStartShouldSetResponder={ (event) => [true|false]}>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
			<Header headerType='Survey' navigation={this.props.navigation}/>
			<View style={{flex: 9}} >
          <View style={styles.contentContainer}>
            <Text style={ styles.text1 } >It's nice to meet you,</Text>
  				  <Text style={ styles.text2 } >{this.state.currentState.name}!</Text>
				    <Happy height={60} width={60} stroke={Colors.fog} />
			    </View>
				</View>
        </ LinearGradient>
		  </ View>
	  )
	}
}