import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import ValueButton from '../../Components/Ui/ValueButton';

import Logo from '../../Images/Icons/logosvg-final.svg';

import styles from './Styles/Survey6Styles';
import { Colors } from '../../Themes';

export default class Survey5 extends Component {
	constructor(props) {
  		super(props);
  		this.state = {
  			currentState: {
  				isCreator: props.navigation.state.params.isCreator,
  				name: props.navigation.state.params.name,
  				isECommerse: props.navigation.state.params.isECommerse,
  				location: props.navigation.state.params.location,
  				industries: props.navigation.state.params.industries,
  				values: [],
  				interests: [],
  				DOB: '',
  				email: '',
  				password: '',
  			},
  			communitySelected: false,
  			diversitySelected: false,
  			educationSelected: false,
  			familySelected: false,
  			innovationSelected: false,
  			spiritualitySelected: false,
  			sustainabilitySelected: false,
  			traditionSelected: false,
  			wellnessSelected: false,
  			selectedCount: 0
  		}
  	}

  	callback0 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, communitySelected: data, selectedCount: this.state.selectedCount + iter});
  	} 

  	callback1 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, diversitySelected: data, selectedCount: this.state.selectedCount + iter});
  	}

  	callback2 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, educationSelected: data, selectedCount: this.state.selectedCount + iter});
  	}

  	callback3 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, familySelected: data, selectedCount: this.state.selectedCount + iter});
  	}

  	callback4 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, innovationSelected: data, selectedCount: this.state.selectedCount + iter});
  	}

  	callback5 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, spiritualitySelected: data, selectedCount: this.state.selectedCount + iter});
  	}

  	callback6 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, sustainabilitySelected: data, selectedCount: this.state.selectedCount + iter});
  	}

  	callback7 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, traditionSelected: data, selectedCount: this.state.selectedCount + iter});
  	}

  	callback8 = (data) => {
  		let iter = 0;
  		if(data) iter += 1;
  		else iter -= 1;
  		this.setState({...this.state, wellnessSelected: data, selectedCount: this.state.selectedCount + iter});
  	}

  	getValuesArray(){
  		let arr = [];
  		if(this.state.communitySelected) arr.push('Community');
  		if(this.state.diversitySelected) arr.push('Diversity');
  		if(this.state.educationSelected) arr.push('Education');
  		if(this.state.familySelected) arr.push('Family');
  		if(this.state.innovationSelected) arr.push('Innovation');
  		if(this.state.spiritualitySelected) arr.push('Spirituality');
  		if(this.state.sustainabilitySelected) arr.push('Sustainability');
  		if(this.state.traditionSelected) arr.push('Tradition');
  		if(this.state.wellnessSelected) arr.push('Wellness');

  		return arr;
  	}

  	continuePressed(){
  		const nextSurveyState = {...this.state.currentState, values: this.getValuesArray() };
  		if(nextSurveyState.isCreator){
  			this.props.navigation.navigate('SurveyCreatorExtra1',{ ...nextSurveyState });
  		} else {
  			this.props.navigation.navigate('Survey7', { ...nextSurveyState });
  		}
    }

  	render() {
  		return (
		<View style={ styles.fullScreen } >
    		<LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
				<Text style={ styles.back } onPress={() => this.props.navigation.goBack()} >&#60;</Text>
				<Logo height={30} width={70} stroke={Colors.fog} />
				<Text style={ styles.text }>What do you value?</Text>
				<Text style={ styles.subtext }>Select 3</Text>
				<View style={ styles.valueButtonContainer }>
					<ValueButton text='Community' svgName='CommunityImage' callback={this.callback0} disabled={this.state.selectedCount > 2} />
					<ValueButton text='Diversity' svgName='DiversityImage' callback={this.callback1} disabled={this.state.selectedCount > 2} />
					<ValueButton text='Education' svgName='EducationImage' callback={this.callback2} disabled={this.state.selectedCount > 2} />
					<ValueButton text='Family' svgName='FamilyImage' callback={this.callback3} disabled={this.state.selectedCount > 2} />
				</View>	
				{this.state.selectedCount === 3 ?
					<PrimaryButtonLarge text='Continue' onPress={() => this.continuePressed()} /> : null
				}
			</ LinearGradient>
		</ View>
	  )
	}
}

/*
					<ValueButton text='Innovation' svgName='InnovationImage' callback={this.callback4} disabled={this.state.selectedCount > 2} />
					<ValueButton text='Spirituality' svgName='SpiritualityImage' callback={this.callback5} disabled={this.state.selectedCount > 2} />
					<ValueButton text='Sustainability' svgName='SustainabilityImage' callback={this.callback6} disabled={this.state.selectedCount > 2} />
					<ValueButton text='Tradition' svgName='TraditionImage' callback={this.callback7} disabled={this.state.selectedCount > 2} />
					<ValueButton text='Wellness' svgName='WellnessImage' callback={this.callback8} disabled={this.state.selectedCount > 2} />
					
*/