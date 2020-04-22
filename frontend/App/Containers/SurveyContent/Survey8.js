import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { makePost } from '../../Services/Apitemp.js';
import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';

import Preview from '../../Images/Icons/preview.svg';
import Approve from '../../Images/Icons/approve.svg';
import BackButton from '../../Images/Icons/back.svg';
import Logo from '../../Images/Icons/logo-fog.svg';

import styles from './Styles/Survey8Styles';
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
  				email: props.navigation.state.params.email,
  				password: '',
  			},
  			password: '',
  			confirm: '',
  			showPass: false
  		}
  	}

  	buttonPressed(){
  		let accountInfo = {...this.state.currentState, password: this.state.password};
  		let account = makePost('api/creators', JSON.stringify({ creator: accountInfo }));
  		//code for sending account info to backend
  		this.props.navigation.navigate('Survey9', account);
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
		return (
		  <View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
  				{this._renderHeader()}
          
          <View style={styles.subheaderContainer}>
            {this.state.isCreator ?
              <ProgressBar progress={9/10} /> :
              <ProgressBar progress={7/8} />
            }
    				<Text style={ styles.text } >Create a password</ Text>
    				<Text style={styles.subtext }>Must include at least eight characters</ Text>
    			</View>

          <View style={styles.contentContainer}>	
            <View style={styles.textFieldFormatter}>
              <TextFieldDarkBG placeholder='Password' onChangeText={(text) => this.setState({...this.state, password: text})} secureTextEntry={!this.state.showPass} />
      	      <Preview height={18.9} width={24} style={styles.svgs} stroke={ Colors.fog } onPress={()=> this.setState({ showPass: !this.state.showPass})} />
    				</View>

            <View style={ styles.textFieldFormatter}>
              <TextFieldDarkBG  placeholder='Confirm Password' onChangeText={(text) => this.setState({...this.state, confirm: text})} secureTextEntry={!this.state.showPass} />
      				{(this.state.password.length > 0) && (this.state.password === this.state.confirm) ?	
      					<Approve height={24} width={24} style={styles.svgs} stroke={Colors.pear} /> : null
      				}
    				</View>
          </View>

          <View style={styles.continueContainer}>
            {(this.state.password.length > 7) && (this.state.password === this.state.confirm) ?	
    					<PrimaryButtonLarge text='Create Account' onPress={() => this.buttonPressed()} /> : null
    				}
          </View>

			  </ LinearGradient>
		  </ View>
	  )
	}
}