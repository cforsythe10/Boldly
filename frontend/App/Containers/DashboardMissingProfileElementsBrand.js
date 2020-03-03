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
                    <Text style={styles.contentText}>Creators can't wait to meet you, but your profile needs more information. To begin matching with campaigns, you need to:</Text>
                    
                    <View style={styles.bulletContainer}>
                        <Text style={styles.bulletPoints}>{bullet} Connect your instagram</Text>
                        <Text style={styles.bulletPoints}>{bullet} Upload a profile picture</Text>
                        <Text style={styles.bulletPoints}>{bullet} Create a campaign</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButtonLarge text='Go to profile' onPress={() => this.props.navigation.navigate('Profile')} />
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

}