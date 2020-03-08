import React, { Component } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';

import Header from '../Components/Ui/Header'
import BoldlyImage from '../Components/Ui/BoldlyImage'

import styles from './Styles/SettingsScreenStyle';

export default class SettingsBrand extends Component {
constructor(props){
    super(props);
}

render(){
  return (
    <View style={styles.fullScreen}>
        <Header headerType='MenuProfile' navigation={this.props.navigation}/>	
        <View>
            <Text style={styles.cardHeaderText}>Notifications</Text>
        </View>
        <View style={styles.centerContentContainer}>
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text>insights-brand</Text>
                </View>
            </View>
        </View>
        <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Account Information</Text>
        </View>
        <View style={styles.centerContentContainer}>
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text>messages-brand</Text>
                </View>
            </View>
        </View>
        <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Payment Information</Text>
            <Text onPress={() => this.props.navigation.navigate('Campaigns')} style={styles.link}>See all</Text>
        </View>
        <View style={styles.centerContentContainer}>    
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text>Campaigns-brand</Text>
                </View>
            </View>
        </View>
    </View>
  )	
}

}