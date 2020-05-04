import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import IconButton from '../../Components/Ui/IconButton';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';
import ProgressBar from '../../Components/Ui/SurveyProgressBar';

import BackButton from '../../Images/Icons/back.svg';
import Logo from '../../Images/Icons/logo-fog.svg';

import styles from './Styles/Survey4Styles';
import { Colors } from '../../Themes';

export default class Survey4 extends Component {
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
        showContinue: false,
        showLocation: props.navigation.state.params.isCreator
      }
    }

    callbackBnM = (data) => {
      this.setState({currentState: {...this.state.currentState}, showLocation: data});
      if(data && this.state.currentState.isECommerse === null) this.setState({currentState: {...this.state.currentState, isECommerse: false}});
      if(data && this.state.currentState.isECommerse && this.state.currentState.location === '') this.setState({currentState: {...this.state.currentState, isECommerse: data}, showContinue: false});
      if(!data) this.setState({currentState: {...this.state.currentState, location: ''}});
    } 

    callbackECom = (data) => {
      this.setState({ currentState: {...this.state.currentState, isECommerse: data}});
      if(data && !this.state.showLocation) this.setState({currentState: {...this.state.currentState, isECommerse: data} , showContinue: true});
    }

    _textChanged(text){
      this.setState({currentState: {...this.state.currentState, location: text}, showContinue: true});
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
      <KeyboardAvoidingView style={ styles.fullScreen }>
          <LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
          <Header headerType='Survey' navigation={this.props.navigation}/>
          <View style={{flex: 9}} >
          <View style={styles.contentContainer}>
            {this.state.currentState.isCreator ?
              <ProgressBar progress={2/10} /> :
              <ProgressBar progress={2/8} />
            }
            
            <Text style={styles.text}>
              {!this.state.currentState.isCreator ?
                'Is your company...' :
                'Where are you located?'
              }
            </Text>
            <Text style={styles.subtext}>
              {!this.state.currentState.isCreator ?
                'Please select all that apply' :
                null
              }
            </Text>
          </View>

          <View style={styles.buttonContainer}>
          {!this.state.currentState.isCreator ?
            <IconButton svgName='BrickAndMortarImage' text='Brick & Mortar' callback={this.callbackBnM} /> : null
          }
          {!this.state.currentState.isCreator ?
            <IconButton svgName='ECommerceImage' text='E-Commerce' callback={this.callbackECom} /> : null 
          }
          </View>

          <View style={styles.locationContainer}>
            {this.state.showLocation ?
              <TextFieldDarkBG placeholder='Location' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} /> : null
            }
          </View>
          
          <View style={styles.continueContainer}>
            {(this.state.currentState.isECommerse && !this.state.showLocation) ||
             (this.state.showLocation && this.state.currentState.location !== '') ?
              <PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey5', {...this.state.currentState})} /> : null
            }
          </View>
          </View>
        </ LinearGradient>
      </ KeyboardAvoidingView>
    )
  }
}