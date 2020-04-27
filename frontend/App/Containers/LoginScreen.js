import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { makePost } from '../Services/Api.js';

import Header from '../Components/Ui/Header';
import TextFieldDarkBG from '../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import Preview from '../Images/Icons/preview.svg';

import styles from './Styles/LoginScreenStyles';
import { Colors } from '../Themes';

export default class DefaultScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      showPass: false,
      showContinue: false
    }
  }

  buttonPressed(){
    makePost('api/creators/sign_in', JSON.stringify({
      email: this.state.username,
      password: this.state.password
    })).then( response => response.json())
        .then(data => { if(!data.errors) this.props.navigation.navigate('Dashboard', data) });

    makePost('api/brands/sign_in', JSON.stringify({
      email: this.state.username,
      password: this.state.password
    })).then( response => response.json())
        .then(data => { if(!data.errors) this.props.navigation.navigate('Dashboard', data) });
  }

  render(){
    return (
      <KeyboardAvoidingView style={styles.fullScreen}>
        <LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
          <Header headerType='Survey' navigation={ this.props.navigation } />
          <View style={styles.contentContainer}>
            <Text style={ styles.text }>Log in</ Text>
            <TextFieldDarkBG placeholder='Email' keyboardType="email-address" autocompleteType="email" onChangeText={(text) => this.setState({ username: text })} secureTextEntry={false} />
            <View style={styles.textFieldFormatter} >
              <TextFieldDarkBG placeholder='Password' onChangeText={(text) => this.setState({ password: text })} secureTextEntry={!this.state.showPass} />
              <Preview height={18.9} width={24} stroke={ Colors.fog } style={styles.preview} onPress={()=> this.setState({ showPass: !this.state.showPass})} />
            </View>
          </ View>
          <View style={styles.continueContainer}>
            {this.state.password.length > 7 &&
             /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username) ? 
              <PrimaryButtonLarge text='Log in' onPress={() => this.buttonPressed()} /> : null
            }
          </View>
        </ LinearGradient>
      </ KeyboardAvoidingView>
    )
  }
}