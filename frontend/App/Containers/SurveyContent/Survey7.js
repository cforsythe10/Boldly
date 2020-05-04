import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';

import BackButton from '../../Images/Icons/back.svg';
import Logo from '../../Images/Icons/logo-fog.svg';

import styles from './Styles/Survey7Styles';
import { Colors } from '../../Themes';

export default class Survey7 extends Component {
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
  				interests: props.navigation.state.params.interests,
  				DOB: props.navigation.state.params.DOB,
  				email: '',
  				password: '',
  			},
  			showContinue: false
  		}
  	}

  	_textChanged(val) {
  		let isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
  		this.setState({ currentState: {...this.state.currentState, email: val}, showContinue: isEmail});
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
		  <KeyboardAvoidingView style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
			<Header headerType='Survey' navigation={this.props.navigation}/>
			<View style={{flex: 9}} >
          <View style={styles.contentContainer}>
            {nextSurveyState.isCreator ?
              <ProgressBar progress={8/10} />:
              <ProgressBar progress={6/8} />
            }
    				<Text style={ styles.text1 } >Alright, you're almost there!</ Text>
    				<Text style={styles.text2 }>What email would you like to be associated with this account?</ Text>
    				<TextFieldDarkBG placeholder='Email Address' keyboardType="email-address" autocompleteType="email" onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} />
          </View>

          <View style={styles.continueContainer}>
    				{this.state.showContinue ?
    					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey8', {...nextSurveyState})} /> : null
    				}
          </View>
					</View>
			 </ LinearGradient>
		  </ KeyboardAvoidingView>
	  )
	}
}