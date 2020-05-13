import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressBar from '../../Components/Ui/SurveyProgressBar';
import RadioIconButton from '../../Components/Ui/RadioIconButton';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';

import Logo from '../../Images/Icons/logo-fog.svg';
import BackButton from '../../Images/Icons/back.svg';

import styles from './Styles/Survey1Styles';
import { Colors } from '../../Themes';


export default class Survey1 extends Component {
	constructor(props){
		super(props);
		this.state = {
			surveyInfo: {
  				isCreator: null,
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
  			brandSelected: false,
  			creatorSelected: false
		}
	}

	actionCreator = () => {
		this.refs.creator.changeState();
		if(!this.state.creatorSelected && this.state.brandSelected) this.refs.brand.changeState();
	}

	actionBrand = () => {
		this.refs.brand.changeState();
		if(!this.state.brandSelected && this.state.creatorSelected) this.refs.creator.changeState();
	}

	callbackCreator = (data) => {
  		this.setState({creatorSelected: data});
  	} 

  	callbackBrand = (data) => {
  		this.setState({brandSelected: data});
  	}

  	_renderHeader = () => {
  		return (
			<View style={styles.surveyHeaderContainer}>
	            <TouchableHighlight onPress={() => this.props.navigation.navigate('Default')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
	                <BackButton height={20} width={20} stroke={Colors.white }/>
	            </TouchableHighlight>
	            
	            <Logo height={30} width={70}/>

	            <View height={20} width={20} />
	        </View>
  		)
  	}

	render() {
		const nextSurveyState = {...this.state.surveyInfo};
		return (
		<View style={ styles.fullScreen }>
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Header headerType='Survey' navigation={this.props.navigation}/>
				<View style={{flex: 9}} >
				<View style={styles.contentContainer}>
          			<ProgressBar progress={1/9} />
					<Text style={ styles.text }>Are you a...</Text>
				</View>

				<View style={styles.buttonContainer}>
					<RadioIconButton onPress={this.actionCreator} ref='creator' svgName='CreatorImage' text='Creator' callback={this.callbackCreator} />
					<RadioIconButton onPress={this.actionBrand} ref='brand' svgName='BrandImage' text='Brand' callback={this.callbackBrand} />
				</View>
				
				<View style={styles.continueContainer}>
					{this.state.creatorSelected || this.state.brandSelected ?
						<PrimaryButtonLarge text='Continue' onPress={() => {
							nextSurveyState.isCreator = this.state.creatorSelected;
							this.props.navigation.navigate('Survey2', {...nextSurveyState} );
						}} /> : null
					}
				</View>
				</View>
			</ LinearGradient>
		</ View>
	  )
	}
}