import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TextFieldDarkBG from '../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import Preview from '../Images/Icons/preview.svg';
import Logo from '../Images/Icons/logosvg-final.svg';

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

  render(){
    return (
      <View style={ styles.fullScreen }>
        <LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
          <Logo height={30} width={70} stroke={Colors.fog} />
          <Text style={ styles.text } onPress={() => this.props.navigation.goBack()}>&#60;</Text>
          <Text style={ styles.text }>Log in</ Text>
          <TextFieldDarkBG placeholder='Email' onChangeText={(text) => this.setState({ username: text })} secureTextEntry={false} />
          <TextFieldDarkBG placeholder='Password' onChangeText={(text) => this.setState({ password: text })} secureTextEntry={!this.state.showPass} />
          <Preview height={18.9} width={24} stroke={ Colors.fog } onPress={()=> this.setState({ showPass: !this.state.showPass})} />
          {this.state.password.length > 7 &&
           /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username) ? 
            <PrimaryButtonLarge text='Log in' onPress={() => this.props.navigation.navigate('Dashboard')} /> : null
          }
        </ LinearGradient>
      </ View>
    )
  }
}