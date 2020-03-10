import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../Components/Ui/Header'
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import styles from './Styles/DashboardScreenStyle';
import { Fonts, Colors } from '../Themes';
// import { testActionCreator } from '../Redux/createStore'; // Importing the neccassary action creators, ideally in one file
// import { connect } from 'react-redux'; // Import the connect function to connect your component/screen to redux state

// const DashboardScreen = ({someActionCreator}) => {
//     someActionCreator('data');
class DashboardScreen extends Component {
    render() {
      return (
      <View style={styles.fullScreen}>
        <Header headerType='MenuProfile' navigation={this.props.navigation}/>
          
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
      </View>
      )
  }
}

// const mapStateToProps = state => ({ // Will return all of state to props, don't do this, grab exactly what you need
//     state
//   });
  
//   const mapDispatchToProps = dispatch => ({ // This can be grabbed from the DashboardScreen props as this.props.someActionCreator
//     someActionCreator: (someData) => dispatch(testActionCreator(someData))
//   });

// export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

export default DashboardScreen;