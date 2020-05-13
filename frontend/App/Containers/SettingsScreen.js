import React, { Component } from 'react';
import { useStore } from 'react-redux';
import { Text, View } from 'react-native';

import Header from '../Components/Ui/Header'
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import SettingsCreator from './SettingsCreator';
import SettingsBrand from './SettingsBrand';

import styles from './Styles/DashboardScreenStyle';
import { Fonts, Colors } from '../Themes';

const SettingsScreen = ({navigation}) => {
    const store = useStore();
    const account = store.getState().loginReducer.loginReducer.account;
    return (
    <View style={styles.fullScreen}>
        {account.birthday ? <SettingsCreator navigation={navigation} /> : null }
        {!account.birthday ? <SettingsBrand navigation={navigation} /> : null }
    </View>
    )
}

/*
<View style={{...styles.centerContentContainer, flex: 9}}>
              <View style={styles.cardContainer}>
                  <View style={styles.cardContentContainer}>
                      <Text style={{...styles.darkText, textAlign: 'center'}}>Temporary settings page to show page disambiguation.</Text>
                      <Text style={{...Fonts.style.h6, paddingTop: '8%'}}>Default settings for creator</Text>
                      <PrimaryButtonLarge key='1' text='Go1' onPress={() => {this.props.navigation.navigate('SettingsCreator')}} />
                      <Text style={{...Fonts.style.h6}}>Default settings for brand</Text>
                      <PrimaryButtonLarge text='Go2' key='2' onPress={() => {this.props.navigation.navigate('SettingsBrand')}} />
                  </View>
              </View>
          </View>
*/

export default SettingsScreen;