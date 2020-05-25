import React, { Component } from 'react';
import { useStore } from 'react-redux';
import { Text, View } from 'react-native';

import Header from '../Components/Ui/Header'
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import DashboardMissingProfileElements from './DashboardMissingProfileElements';
import DashboardMissingProfileElementsBrand from './DashboardMissingProfileElementsBrand';
import DashboardScreenRegular from './DashboardScreenRegular';
import DashboardScreenRegularBrand from './DashboardScreenRegularBrand';

import styles from './Styles/DashboardScreenStyle';
import { Fonts, Colors } from '../Themes';
import BoldlyImage from '../Components/Ui/BoldlyImage';
// import { testActionCreator } from '../Redux/createStore'; // Importing the neccassary action creators, ideally in one file
// import { connect } from 'react-redux'; // Import the connect function to connect your component/screen to redux state

// const DashboardScreen = ({someActionCreator}) => {
//     someActionCreator('data');
const DashboardScreen = ({navigation}) => {
    const store = useStore();
    const account = store.getState().loginReducer.loginReducer.account;
    console.log(account);
    return (
    <View style={styles.fullScreen}>
        {account.birthday && !account.instagramAccount ? <DashboardMissingProfileElements navigation={navigation} /> : null }
        {!account.birthday && !account.instagramAccount ? <DashboardMissingProfileElementsBrand navigation={navigation} /> : null }
        {account.birthday && account.instagramAccount ? <DashboardScreenRegular navigation={navigation} /> : null }
        {!account.birthday && account.instagramAccount ? <DashboardScreenRegularBrand navigation={navigation} /> : null }
    </View>
    )
}

export default DashboardScreen;