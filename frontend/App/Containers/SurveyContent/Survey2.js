import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';

import Logo from '../../Images/Icons/logo-fog.svg';
import BackButton from '../../Images/Icons/back.svg';

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

  	render() {
  		const nextSurveyState = {...this.state.currentState};
		return (
		  <View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				
			<Header headerType='Survey' navigation={this.props.navigation}/>
			<View style={{flex: 9}} >
          <View style={styles.contentContainer}>
            {nextSurveyState.isCreator ?
              <ProgressBar progress={2/10} /> :
              <ProgressBar progress={2/8} />
            }
            <Text style={ styles.text } >{this.state.currentState.isCreator ? 
    					'What is your name?':
    					'What is the name of\n       your brand?'}</ Text>
    				<Text style={styles.subtext }>{this.state.currentState.isCreator ?
    					'This is how you will appear to brands' :
    					'This is how you will appear to creators'}</ Text>
            {this.state.currentState.isCreator ?
    				  <TextFieldDarkBG placeholder='Firstname Lastname' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} /> :
    				  <TextFieldDarkBG placeholder='Name' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} />
            }
          </View>

          <View style={styles.continueContainer}>
            {this.state.showContinue ?
      				<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey3', {...nextSurveyState})} /> : null
      			}
          </View>
		  </View>
			  </ LinearGradient>
		  </ View>
	  )
	}
}