import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../Components/Ui/Header'
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import styles from './Styles/DashboardScreenStyle';
import { Fonts, Colors } from '../Themes';
import BoldlyImage from '../Components/Ui/BoldlyImage';
// import { testActionCreator } from '../Redux/createStore'; // Importing the neccassary action creators, ideally in one file
// import { connect } from 'react-redux'; // Import the connect function to connect your component/screen to redux state

// const DashboardScreen = ({someActionCreator}) => {
//     someActionCreator('data');
const DashboardScreen = ({navigation}) => {
    return (
    <View style={styles.fullScreen}>
    	<Header headerType='MenuProfile' navigation={navigation}/>
        
        <View style={{...styles.centerContentContainer, flex: 9}}>
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text style={{...styles.darkText, textAlign: 'center'}}>Temporary dashboard to show page disambiguation.</Text>
                    <Text style={{...Fonts.style.h6, paddingTop: '8%'}}>Dashboard for brand not finished profile</Text>
                    <PrimaryButtonLarge text='Go1' onPress={() => navigation.navigate('DashboardMissingProfileB')} />
                    <Text style={{...Fonts.style.h6}}>Dashboard for creator not finished profile</Text>
                    <PrimaryButtonLarge text='Go2' onPress={() => navigation.navigate('DashboardMissingProfileC')} />
                    <Text style={{...Fonts.style.h6}}>Dashboard for brand with no campaign</Text>
                    <PrimaryButtonLarge text='Go3' onPress={() => navigation.navigate('CampaignScreen')} />
                    <Text style={{...Fonts.style.h6}}>Regular dashboard for brand</Text>
                    <PrimaryButtonLarge text='Go4'  onPress={() => navigation.navigate('DashboardRegularB')} />
                    <Text style={{...Fonts.style.h6}}>Regular dashboard for creator</Text>
                    <PrimaryButtonLarge text='Go5' onPress={() => navigation.navigate('DashboardRegularC')} />
                    <BoldlyImage image='string' />
                </View>
            </View>
        </View>
    </View>
    )
}

// const mapStateToProps = state => ({ // Will return all of state to props, don't do this, grab exactly what you need
//     state
//   });
  
//   const mapDispatchToProps = dispatch => ({ // This can be grabbed from the DashboardScreen props as this.props.someActionCreator
//     someActionCreator: (someData) => dispatch(testActionCreator(someData))
//   });

// export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

export default DashboardScreen;