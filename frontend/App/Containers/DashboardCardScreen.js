import React, { Component } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';

import Header from '../Components/Ui/Header'
import BoldlyImage from '../Components/Ui/BoldlyImage'
import styles from './Styles/DashboardCardScreenStyle'


export default class DashboardCardScreen extends Component {

render(){
  return (
    <View style={styles.container}>
    	<Header headerType='MenuProfile' navigation={this.props.navigation}/>
        <View style={styles.card}>
        <View>
        <Text>foo bar</Text>
        </View>
        </View>

    </View>
  )	
}

}