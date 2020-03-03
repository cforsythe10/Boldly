import React, { Component } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';

import Header from '../Components/Ui/Header';
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import Campaign from '../Images/Icons/campaign.svg';

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
                        <Campaign style={{marginVertical: '7%'}} height={50} width={50} stroke={ Colors.charcoal } />
                    </View>
                    
                    <Text style={styles.darkText}>Create your first campaign</Text>
                    <Text style={styles.contentText}>Looking good! The next step is to create your first campaign. To begin matching with creators, you need to:</Text>
                    
                    <View style={styles.bulletContainer}>
                        <Text style={styles.bulletPoints}>{bullet} Create a campaign</Text>
                        <Text style={styles.bulletPoints}>{bullet} Publish campaign</Text>
                        <Text style={styles.bulletPoints}>{bullet} Review applicants</Text>
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