import React, { Component } from 'react';
import { ScrollView, Text, Button, View, Alert, TouchableOpacity } from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native'

import Header from '../Components/Ui/Header';
import BoldlyImage from '../Components/Ui/BoldlyImage';
import SecondaryButtonMedium from '../Components/Ui/SecondaryButtonMedium';
import Edit from '../Images/Icons/edit-icon.svg'
import Email from '../Images/Icons/email.svg'
import Forward from '../Images/Icons/forward.svg'
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
    <Header headerType='MenuProfileTitle' title="Settings" navigation={this.props.navigation}/>
    <View style={{...styles.centerContentContainer, flex: 9}} >
        
        <View style={styles.settingsScroll}>
        <ScrollView style={styles.fullScreen}>
        
        
        <View style={styles.settingsHeader}>
            <Text style={styles.h5}>Notifications</Text>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                    <Text style={styles.bodyText}>New Matches</Text>
                    <ToggleSwitch isOn={this.state.isOnMatches} size='small' onToggle={() => this.setState({ isOnMatches: !this.state.isOnMatches })} />

            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                    <Text  style={styles.bodyText}>New Messages</Text>
                    <ToggleSwitch isOn={this.state.isOnMessages} size='small' onToggle={() => this.setState({ isOnMessages: !this.state.isOnMessages })} />
             
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
   
                    <Text style={styles.bodyText}>New Applicants</Text>
                    <ToggleSwitch isOn={this.state.isOnApplicants} size='small' onToggle={() => this.setState({ isOnApplicants: !this.state.isOnApplicants })} />

            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                    <Text style={styles.bodyText}>Reminders &amp; News</Text>
                    <ToggleSwitch isOn={this.state.isOnReminders} size='small' onToggle={() => this.setState({ isOnReminders: !this.state.isOnReminders })} />
   
            </View>
        </View>
        

        <View style={styles.settingsHeader}>
            <Text style={styles.h5}>Account Information</Text>
        </View>
        <TouchableOpacity style={styles.settingsCard} onPress={() => this.props.navigation.navigate('SettingsEmail')}>
            <View style={styles.settingsContent}>
            <View style={styles.group}>
                <Email height={20} width={20} /><Text style={styles.bodyText}>   currentemail@gmail.com </Text>
            </View>
            <Edit height={20} width={20} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsCard} onPress={() => this.props.navigation.navigate('SettingsPassword')}>
            <View style={styles.settingsContent}>
            <View style={styles.group}><Password height={20} width={20} /><Text style={styles.bodyText}>   ********  </Text></View>
            <Edit height={20} width={20} />
            </View>
        </TouchableOpacity>

        <View style={styles.settingsHeader}>
            <Text style={styles.h5}>Payment Methods</Text>
        </View>
        <TouchableOpacity style={styles.settingsCard} onPress={() => this.props.navigation.navigate('SettingsPayment')}>
            <View style={styles.settingsContent}>
                <Text style={styles.bodyText}>Choose payment method </Text><Edit height={20} width={20} />
            </View>
        </TouchableOpacity>
        
        <View style={styles.settingsHeader}>
            <Text style={styles.h5}>About</Text>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text style={styles.bodyText}>Privacy policy</Text><Forward height={16} width={16} />
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text style={styles.bodyText}>Terms and conditions</Text><Forward height={16} width={16} />
            </View>
        </View>
        <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                <Text style={styles.bodyText}>Help</Text><Forward height={16} width={16} />
            </View>
        </View>

        <View style={styles.deleteSection}>
            <SecondaryButtonMedium text='Delete account' onPress = {() => Alert.alert('Delete account', 'Are you sure you want to deactivate your account?', [{text: 'Cancel', style: 'cancel'}, {text: 'OK'}])} />
            <View style={styles.settingsContent}>
                <Text style={styles.deleteText}>This will remove your profile &amp; settings from our system. This action cannot be undone.</Text>
            </View>
        </View>

    </ScrollView>
    </View>
    </View>
    </View>
  ) 
}

}