import React, { Component } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';

import Header from '../Components/Ui/Header'
import BoldlyImage from '../Components/Ui/BoldlyImage'


import styles from './Styles/DashboardScreenStyle';

export default class DashboardScreen extends Component {

render(){
  return (
    <View style={styles.container}>
    	<Header headerType='MenuProfile' navigation={this.props.navigation}/>
        <Text style={styles.text}>Insights</Text>
        <View style={styles.insights}><Text>insights - content creators</Text></View>
        <Text style={styles.text}>Messages</Text>
        <View style={styles.messages}><Text>messages - content creators</Text></View>
        <Text style={styles.text}>Matched Campaigns</Text>
        <View style={styles.campaigns}><Text>campaigns - content creators</Text></View>

    </View>
  )	
}

}