import React from 'react';
import { View, Text } from 'react-native';
import Community from '../../Images/Icons/community.svg';
import PrimaryButtonLarge from '../Ui/PrimaryButtonLarge';
import Colors from '../../Themes/Colors';
import styles from './Styles/CampaignStyles';

const bullet = '\u2022';

const NoCampaigns = () => (
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
);

export default NoCampaigns;
