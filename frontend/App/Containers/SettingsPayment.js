import React, { Component } from 'react';
import { ScrollView, Text, Button, View, Alert } from 'react-native';

import Header from '../Components/Ui/Header';
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';
import TextFieldWide from '../Components/Ui/TextFieldWide';

import styles from './Styles/SettingsScreenStyle';

export default class SettingsEmail extends Component {

constructor(props){
    super(props);
}

render(){
  return (
    <View style={styles.fullScreen}>
        <Header headerType='MenuProfile' navigation={this.props.navigation}/>

        <View flex={8}><Text>Placeholder for payment settings</Text></View>
    </View>
  ) 
}

}