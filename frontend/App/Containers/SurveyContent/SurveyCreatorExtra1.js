import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';

import BackButton from '../../Images/Icons/back.svg';
import Logo from '../../Images/Icons/logo-fog.svg';

import styles from './Styles/SurveyCreatorExtra1Styles';
import { Colors } from '../../Themes';

export default class SurveyCreatorExtra1 extends Component {
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

    _textChanged(val) {
      this.setState({currentState: {...this.state.currentState, interests: val.trim()}});
    }

  	render() {
		return (
		  <View style={ styles.fullScreen } >
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
          {this._renderHeader()}
         
          <View style={styles.contentContainer}>
            <ProgressBar progress={6/10} />
    				<Text style={ styles.text } >What are your interests?</Text>
    				<TextFieldDarkBG placeholder='Interests' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} />
  				</View>

          <View style={styles.continueContainer}>
            {this.state.showContinue ?
    					<PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('SurveyCreatorExtra2', {...this.state.currentState})} /> : null
    				}
          </View>
          
			 </ LinearGradient>
		  </ View>
	  )
	}
}