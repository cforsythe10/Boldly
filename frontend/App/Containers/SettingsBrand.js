import React, { Component } from 'react';
import { ScrollView, Text, Button, View, Alert, TouchableOpacity } from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native'

import Header from '../Components/Ui/Header';
import BoldlyImage from '../Components/Ui/BoldlyImage';
import SecondaryButtonMedium from '../Components/Ui/SecondaryButtonMedium';
import Edit from '../Images/Icons/edit-icon.svg'
import Email from '../Images/Icons/email.svg'
import Password from '../Images/Icons/password.svg'

import styles from './Styles/SettingsScreenStyle';

export default class SettingsBrand extends Component {
state = {
    isOnMatches: true,
    isOnMessages: true,
    isOnReminders: true,
    isOnApplicants: true,
    isOnInvisible: false
  };

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
                <View style={styles.iconWithText}>
                    <Text>New Matches                                                      </Text>
                    <ToggleSwitch isOn={this.state.isOnMatches} size='small' onToggle={() => this.setState({ isOnMatches: !this.state.isOnMatches })} />
                </View>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <View style={styles.iconWithText}>
                    <Text>New Messages                                                   </Text>
                    <ToggleSwitch isOn={this.state.isOnMessages} size='small' onToggle={() => this.setState({ isOnMessages: !this.state.isOnMessages })} />
                </View>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <View style={styles.iconWithText}>
                    <Text>New Applicants                                                   </Text>
                    <ToggleSwitch isOn={this.state.isOnApplicants} size='small' onToggle={() => this.setState({ isOnApplicants: !this.state.isOnApplicants })} />
                </View>
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <View style={styles.iconWithText}>
                    <Text>Reminders & News                                             </Text>
                    <ToggleSwitch isOn={this.state.isOnReminders} size='small' onToggle={() => this.setState({ isOnReminders: !this.state.isOnReminders })} />
                </View>
            </View>
        </View>

        <View style={styles.settingsHeader}>
            <Text style={styles.headerText}>Account Information</Text>
        </View>
        <TouchableOpacity style={styles.settingsCard} onPress={() => this.props.navigation.navigate('SettingsEmail')}>
            <View style={styles.settingsContent}>
                <Text><Email height={20} width={20} />   currentemail@gmail.com                             <Edit height={20} width={20} /></Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsCard} onPress={() => this.props.navigation.navigate('SettingsPassword')}>
            <View style={styles.settingsContent}>
                <Text><Password height={20} width={20} />   ********                                                           <Edit height={20} width={20} /></Text>
            </View>
        </TouchableOpacity>

        <View style={styles.settingsHeader}>
            <Text style={styles.headerText}>Payment Methods</Text>
        </View>
        <TouchableOpacity style={styles.settingsCard} onPress={() => this.props.navigation.navigate('SettingsPayment')}>
            <View style={styles.settingsContent}>
                <Text>Choose payment method                                     <Edit height={20} width={20} /></Text>
            </View>
        </TouchableOpacity>
        
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
            <SecondaryButtonMedium text='Delete account' onPress = {() => Alert.alert('Delete account', 'Are you sure you want to deactivate your account?', [{text: 'Cancel', style: 'cancel'}, {text: 'OK'}])} />
            <View style={styles.settingsContent}>
                <Text style={styles.deleteText}>This will remove your profile & settings from our system. This action cannot be undone.</Text>
            </View>
        </View>

    </View>
  ) 
}

}