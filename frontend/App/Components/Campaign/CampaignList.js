import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './Styles/CampaignStyles';
import Card from '../Ui/Card';
import { ScrollView } from 'react-native-gesture-handler';

const campaignSections = {
    CURRENT: 'CURRENT',
    PAST: 'PAST'
}

const CampaignList = ({campaigns}) => {
    const [campaignTypeSelected, setCampaignType] = useState(campaignSections.CURRENT);
    const {
        campaignMatches,
        campaignSavedForLater,
        campaignApplied,
        campaignActive
    } = campaigns;

    return (
        <ScrollView>
           <View style={styles.campaignTypeBar}>
                <TouchableOpacity
                    style={styles.campaignTypeButton}
                    key={campaignSections.CURRENT}
                    onPress={() => setCampaignType(campaignSections.CURRENT)}
                >
                    <Text style={styles.campaignTypeText}>Current</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.campaignTypeButton}
                    key={campaignSections.PAST}
                    onPress={() => setCampaignType(campaignSections.PAST)}
                >
                    <Text style={styles.campaignTypeText}>Past</Text>
                </TouchableOpacity>
           </View>
           {campaignTypeSelected === campaignSections.CURRENT && <View style={styles.selectedBar} />}
           {campaignTypeSelected === campaignSections.PAST && <View style={{...styles.selectedBar, left: '51%'}} />}
           {campaignTypeSelected === campaignSections.CURRENT ? (
                <View style={styles.campaigns}>
                        <View style={styles.campaignMatches}>
                            <Text style={styles.header}>Your Matches</Text>
                            {campaignMatches && campaignMatches.map(match => <Card key={match.id} {...match} />)}
                        </View>
                        <View style={styles.campaignSavedForLater}>
                            <Text style={styles.header}>Saved for Later</Text>
                            {campaignSavedForLater && campaignSavedForLater.map(match => <Card key={match.id} {...match} />)}
                        </View>
                        <View style={styles.campaignApplied}>
                            <Text style={styles.header}>Applied</Text>
                            {campaignApplied && campaignApplied.map(match => <Card key={match.id} {...match} />)}
                        </View>
                        <View style={styles.campaignActive}>
                            <Text style={styles.header}>Active</Text>
                            {campaignActive && campaignActive.map(match => <Card key={match.id} {...match} />)}
                        </View>
                </View>
           ) : (
               <View style={styles.campaigns}>
                   {campaignApplied && campaignApplied.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
               </View>
           )}
        </ScrollView>
    );
}

export default CampaignList;