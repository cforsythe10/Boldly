import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';

import BackButton from '../../Images/Icons/back.svg';
import Logo from '../../Images/Icons/logo-fog.svg';

import styles from './Styles/Survey5Styles';
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
  				industries: '',
  				values: [],
  				interests: '',
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
      this.setState({currentState: {...this.state.currentState, industries: val}});
    }

  	render() {
		return (
		  <View style={ styles.fullScreen } >
        <LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
		<Header headerType='Survey' navigation={this.props.navigation}/>
		<View style={{flex: 9}} >
          <View style={styles.contentContainer}>
            {this.state.currentState.isCreator ?
              <ProgressBar progress={4/10} /> :
              <ProgressBar progress={4/8} />
            }
            <Text style={ styles.text } >What industry are you in?</Text>
  				  <TextFieldDarkBG placeholder='Industry' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} />
				  </View>

          <View style={styles.continueContainer}>
            {this.state.showContinue ?
  					 <PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey6', {...this.state.currentState})} /> : null
  				  }
          </View>
					</View>
			  </ LinearGradient>
		  </ View>
	  )
	}
}