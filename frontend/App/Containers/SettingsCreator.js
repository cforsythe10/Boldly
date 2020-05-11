import React, { Component } from 'react';
import { ScrollView, Text, Button, View, Alert, TouchableOpacity } from 'react-native';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SettingsActionCreators from '../Redux/settingsActions';

import ToggleSwitch from 'toggle-switch-react-native'

import Header from '../Components/Ui/Header';
import BoldlyImage from '../Components/Ui/BoldlyImage';
import SecondaryButtonMedium from '../Components/Ui/SecondaryButtonMedium';
import Edit from '../Images/Icons/edit.svg'
import Forward from '../Images/Icons/forward.svg'
import Email from '../Images/Icons/email.svg'
import Password from '../Images/Icons/password.svg'

import styles from './Styles/SettingsScreenStyle';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class SettingsBrand extends Component  {

    constructor(props) {
        super(props);
    }



    render(){
        return( <SettingsScreen ths={this} /> )
    }
}

const SettingsScreen = ({ths}) => {
    const store = useStore();
    let state = store.getState().settingsReducer.settingsReducer;
    
    return (
        <View style={styles.fullScreen}>
            <Header headerType='MenuProfileTitle' title="Settings" navigation={ths.props.navigation}/>
            <View style={{...styles.centerContentContainer, flex: 9}} >
            <View style={styles.settingsScroll}>
            <ScrollView style={styles.fullScreen}>
            
            <View style={styles.settingsHeader}>
                <Text style={styles.h5}>Notifications</Text>
            </View>
            
            
            <View style={styles.settingsCard}>
                <View style={styles.settingsContent}>
                        <Text style={styles.bodyText}>New Matches</Text>
                        <ToggleSwitch isOn={state.isOnMatches} size='small' onToggle={() => {ths.props.updateMatches(); ths.forceUpdate(); }} />

                </View>
            </View>
            <View style={styles.settingsCard}>
                <View style={styles.settingsContent}>
                        <Text  style={styles.bodyText}>New Messages</Text>
                        <ToggleSwitch isOn={state.isOnMessages} size='small' onToggle={() => {ths.props.updateMessages(); ths.forceUpdate(); }} />
                 
                </View>
            </View>
            <View style={styles.settingsCard}>
            <View style={styles.settingsContent}>
                        <Text style={styles.bodyText}>Reminders &amp; News</Text>
                        <ToggleSwitch isOn={state.isOnReminders} size='small' onToggle={() => {ths.props.updateReminders(); ths.forceUpdate(); }} />
       
                </View>
            </View>


            
            <View style={styles.settingsHeader}>
                <Text style={styles.h5}>Account Information</Text>
            </View>
            <TouchableOpacity style={styles.settingsCard} onPress={() => ths.props.navigation.navigate('SettingsEmail')}>
                <View style={styles.settingsContent}>
                <View style={styles.group}>
                    <Email height={16} width={16} /><Text style={styles.bodyText}>   currentemail@gmail.com </Text>
                </View>
                <Edit height={16} width={16} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsCard} onPress={() => ths.props.navigation.navigate('SettingsPassword')}>
                <View style={styles.settingsContent}>
                <View style={styles.group}><Password height={16} width={16} /><Text style={styles.bodyText}>   ********  </Text></View>
                <Edit height={16} width={16} stroke={Colors.charcoal65}/>
                </View>
            </TouchableOpacity>

            <View style={styles.settingsHeader}>
                <Text style={styles.h5}>Payment Methods</Text>
            </View>
            <TouchableOpacity style={styles.settingsCard} onPress={() => ths.props.navigation.navigate('SettingsPayment')}>
            <View style={styles.settingsContent}>
                    <Text style={styles.bodyText}>Choose payment method </Text><Edit height={16} width={16} />
                </View>
            </TouchableOpacity>

            <View style={styles.settingsHeader}>
                <Text style={styles.h5}>Account Status</Text>
            </View>
            
                

            <View style={styles.settingsCard}>
                <View style={styles.settingsContent}>
                        <Text style={styles.bodyText}>Invisible Mode</Text>
                        <ToggleSwitch isOn={state.isOnInvisible} size='small' onToggle={() => {ths.props.updateInvisible(); ths.forceUpdate(); }} />

                </View>
            </View>


            
            <View style={styles.invisibleSettingsCard}>
                <View style={styles.settingsContent}>
                    <Text style={styles.caption}>Turn this on to hide your account from new campaigns. All other boldly functions will remain accessible.</Text>
                </View>
            </View>
            
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


/*
        






                
*/


const mapStateToProps = function(state) {
  return {
    isOnMatches: state.isOnMessages,
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(SettingsActionCreators, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsBrand);