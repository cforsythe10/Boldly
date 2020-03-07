import React from 'react';
import { View, Text } from 'react-native';
import Campaign from '../../Images/Icons/campaign.svg';
import PrimaryButtonLarge from '../Ui/PrimaryButtonLarge';
import Colors from '../../Themes/Colors';
import styles from './Styles/CampaignStyles';

const bullet = '\u2022';

const NoCampaigns = ({navigation}) => (
    <View style={styles.cardContainer}>
        <View style={styles.cardContentContainer}>
            <View style={styles.newUserContentBar}>
                <Campaign style={{marginVertical: '7%'}} height={50} width={50} stroke={ Colors.charcoal } />
            </View>
            
            <Text style={styles.darkText}>Create your first campaign!</Text>
            <Text style={styles.contentText}>Looking good! The next step is to create your first campaign. To begin matching with creators, you need to:</Text>
            
            <View style={styles.bulletContainer}>
                <Text style={styles.bulletPoints}>{bullet} Create a campaign</Text>
                <Text style={styles.bulletPoints}>{bullet} Publish campaign</Text>
                <Text style={styles.bulletPoints}>{bullet} Review applicants</Text>
            </View>

            <View style={styles.buttonContainer}>
                <PrimaryButtonLarge text='Create a campaign' onPress={() => navigation.navigate('CampaignCreator')} />
            </View>
        </View>
    </View>
);

export default NoCampaigns;
