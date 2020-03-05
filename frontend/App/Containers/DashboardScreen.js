import React from 'react';
import { Text, View } from 'react-native';

import Header from '../Components/Ui/Header'
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import styles from './Styles/DashboardScreenStyle';
import { Fonts } from '../Themes';
// import { testActionCreator } from '../Redux/createStore'; // Importing the neccassary action creators, ideally in one file
// import { connect } from 'react-redux'; // Import the connect function to connect your component/screen to redux state

// const DashboardScreen = ({someActionCreator}) => {
//     someActionCreator('data');
const DashboardScreen = () => {
    return (
        <View style={styles.fullScreen}>
            <Header headerType='MenuProfile' />
            
            <View style={{...styles.centerContentContainer, flex: 9}}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardContentContainer}>
                        <Text style={{...styles.darkText, textAlign: 'center'}}>Temporary dashboard to show page disambiguation.</Text>
                        <Text style={{...Fonts.style.h6, paddingTop: '8%'}}>Dashboard for brand not finished profile</Text>
                        <PrimaryButtonLarge text='Go1' onPress={() => {this.props.navigation.navigate('DashboardMissingProfileB')}} />
                        <Text style={{...Fonts.style.h6}}>Dashboard for creator not finished profile</Text>
                        <PrimaryButtonLarge text='Go2' onPress={() => {this.props.navigation.navigate('DashboardMissingProfileC')}} />
                        <Text style={{...Fonts.style.h6}}>Dashboard for brand with no campaign</Text>
                        <PrimaryButtonLarge text='Go3' onPress={() => {this.props.navigation.navigate('DashboardNoCampaign')}} />
                        <Text style={{...Fonts.style.h6}}>Regular dashboard for brand</Text>
                        <PrimaryButtonLarge text='Go4'  onPress={() => {this.props.navigation.navigate('DashboardRegularB')}} />
                        <Text style={{...Fonts.style.h6}}>Regular dashboard for creator</Text>
                        <PrimaryButtonLarge text='Go5' onPress={() => {this.props.navigation.navigate('DashboardRegularC')}} />
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