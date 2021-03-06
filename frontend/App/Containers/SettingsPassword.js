import React, { Component } from 'react';
import { ScrollView, Text, Button, View, Alert } from 'react-native';

import Header from '../Components/Ui/Header';
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';
import TextFieldTall from '../Components/Ui/TextFieldTall';

import styles from './Styles/SettingsScreenStyle';

export default class SettingsEmail extends Component {

constructor(props){
    super(props);
}

render(){
  return (
    <View style={styles.fullScreen}>
        <Header headerType='MenuProfileTitle' title="Settings" navigation={this.props.navigation}/>
        <View style={{...styles.centerContentContainer, flex: 9}} >
        <View style={styles.settingsScroll}>
        <ScrollView style={styles.fullScreen}>

        <View style={styles.settingsHeader}>
            <Text style={styles.h5}>Password settings</Text>
        </View>
        <View style={styles.settingsInputCard}>
            <TextFieldTall placeholder='Old password' />
        </View>
        <View style={styles.settingsInputCard}>
            <TextFieldTall placeholder='New password' />
        </View>
        <View style={styles.settingsInputCard}>
            <TextFieldTall placeholder='Confirm new password' />
        </View>

        <View style={styles.save}>
        <PrimaryButtonLarge text='Save' onPress={() => null}/>
        </View>

        </ScrollView>
        </View>
        </View>
    </View>
  ) 
}

}