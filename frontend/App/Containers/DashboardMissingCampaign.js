import React, { Component } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';

import Header from '../Components/Ui/Header';
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import Community from '../Images/Icons/community.svg';

import styles from './Styles/DashboardScreenStyle';
import { Colors } from '../Themes';

export default class DashboardMissingProfileElements extends Component {

render() {
const bullet = '\u2022';
    return (
    <View style={styles.fullScreen}>
        <Header headerType='MenuProfile' navigation={this.props.navigation}/>   
        <View style={{...styles.centerContentContainer, flex: 9}}>
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <View style={styles.newUserContentBar}>
                        <Community style={{marginVertical: '7%'}} height={50} width={50} stroke={ Colors.charcoal } />
                    </View>
                    
                    <Text style={styles.darkText}>Let's get started!</Text>
                    <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                    
                    <View style={styles.bulletContainer}>
                        <Text style={styles.bulletPoints}>{bullet} X</Text>
                        <Text style={styles.bulletPoints}>{bullet} X</Text>
                        <Text style={styles.bulletPoints}>{bullet} X</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButtonLarge text='Create a campaign' onPress={() => this.props.navigation.navigate('Campaigns')} />
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

}