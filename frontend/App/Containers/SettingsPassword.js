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

        <View style={styles.settingsHeader}>
            <Text style={styles.headerText}>Password settings</Text>
        </View>
        <View style={styles.settingsInputCard}>
            <TextFieldWide placeholder='Old password' />
        </View>
        <View style={styles.settingsInputCard}>
            <TextFieldWide placeholder='New password' />
        </View>
        <View style={styles.settingsInputCard}>
            <TextFieldWide placeholder='Confirm new password' />
        </View>

        <View style={styles.save}>
        <PrimaryButtonLarge text='Save' onPress={() => null}/>
        </View>
    </View>
  ) 
}

}