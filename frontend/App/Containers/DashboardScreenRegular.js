import React, { Component } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';

import Header from '../Components/Ui/Header'
import BoldlyImage from '../Components/Ui/BoldlyImage'


import styles from './Styles/DashboardScreenStyle';

export default class DashboardScreenRegular extends Component {
constructor(props){
    super(props);
}

render(){
  return (
    <View style={styles.fullScreen}>
        <Header headerType='MenuProfile' navigation={this.props.navigation}/>	
        <View style={styles.cardHeader}>
            <Text style={styles.text}>Messages</Text>
            <Text onPress={() => this.props.navigation.navigate('Messages')} style={styles.link}>Go to inbox</Text>
        </View>
        <View style={styles.centerContentContainer}>
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text>messages-creator</Text>
                </View>
            </View>
        </View>
        <View style={styles.cardHeader}>
            <Text style={styles.text}>Matched Campaigns</Text>
            <Text onPress={() => this.props.navigation.navigate('Campaigns')} style={styles.link}>See all</Text>
        </View>
        <View style={styles.centerContentContainer}>    
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text>Campaigns-creator</Text>
                </View>
            </View>
        </View>
    </View>
  )	
}

}