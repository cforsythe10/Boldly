import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';

import Preview from '../../Images/Icons/preview.svg';
import Approve from '../../Images/Icons/approve.svg';

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
  		console.log(accountInfo);
  		//code for sending account info to backend
  		this.props.navigation.navigate('Survey9', { email: accountInfo.email, password: accountInfo.password});
  	}

  	render() {
		return (
		  <View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
  				<Header headerType='Survey' navigation={ this.props.navigation } />
          {this.state.isCreator ?
            <ProgressBar progress={9/10} /> :
            <ProgressBar progress={7/8} />
          }
  				<Text style={ styles.text } >Create a password</ Text>
  				<Text style={styles.subtext }>Must include eight characters</ Text>
  				<TextFieldDarkBG placeholder='Password' onChangeText={(text) => this.setState({...this.state, password: text})} secureTextEntry={!this.state.showPass} />
  	            <Preview height={18.9} width={24} stroke={ Colors.fog } onPress={()=> this.setState({ showPass: !this.state.showPass})} />
  				<TextFieldDarkBG placeholder='Confirm Password' onChangeText={(text) => this.setState({...this.state, confirm: text})} secureTextEntry={!this.state.showPass} />
  				{(this.state.password.length > 7) && (this.state.password === this.state.confirm) ?	
  					<Approve height={24} width={24} stroke={Colors.pear} /> : null
  				}
  				{(this.state.password.length > 7) && (this.state.password === this.state.confirm) ?	
  					<PrimaryButtonLarge text='Create Account' onPress={() => this.buttonPressed()} /> : null
  				}
			  </ LinearGradient>
		  </ View>
	  )
	}
}