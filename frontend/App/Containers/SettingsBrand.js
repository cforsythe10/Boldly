import React, { Component } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';

import Header from '../Components/Ui/Header';
import BoldlyImage from '../Components/Ui/BoldlyImage';
import SecondaryButtonMedium from '../Components/Ui/SecondaryButtonMedium';
import Edit from '../Images/Icons/edit-icon.svg'
import Email from '../Images/Icons/email.svg'
import Password from '../Images/Icons/password.svg'

import styles from './Styles/SettingsScreenStyle';

export default class SettingsBrand extends Component {
constructor(props){
    super(props);
}

render(){
  return (
    <View style={styles.fullScreen}>
        <Header headerType='MenuProfile' navigation={this.props.navigation}/>

        <View style={styles.settingsHeader}>
            <Text style={styles.headerText}>Notifications</Text>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>New Matches</Text>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>New Messages</Text>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>New Applicants</Text>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>Reminders & News</Text>
            </View>
        </View>

        <View style={styles.settingsHeader}>
            <Text style={styles.headerText}>Account Information</Text>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text><Email height={20} width={20} />   currentemail@gmail.com                             <Edit height={20} width={20} /></Text>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text><Password height={20} width={20} />   ********                                                          <Edit height={20} width={20} /></Text>
            </View>
        </View>

        <View style={styles.settingsHeader}>
            <Text style={styles.headerText}>Payment Methods</Text>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>Choose payment method                                     <Edit height={20} width={20} /></Text>
            </View>
        </View>

        <View style={styles.settingsHeader}>
            <Text style={styles.headerText}>Account Status</Text>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>Invisible Mode</Text>
            </View>
        </View>
        <View style={styles.settingsContent}>
            <Text style={styles.deleteText}>Turn this on to hide your account from new campaigns. All other boldly functions will remain accessible.</Text>
        </View>
        
        <View style={styles.settingsHeader}>
            <Text style={styles.headerText}>About</Text>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>Privacy policy</Text>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>Terms and conditions</Text>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text>Help</Text>
            </View>
        </View>

        <View style={styles.deleteSection}>
            <SecondaryButtonMedium text='Delete account' onPress = {() => navigation.navigate('SettingsCreator')} />
            <View style={styles.settingsContent}>
                <Text style={styles.deleteText}>This will remove your profile & settings from our system. This action cannot be undone.</Text>
            </View>
        </View>

    </View>
  ) 
}

}