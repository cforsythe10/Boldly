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
                       {campaignMatches && <View style={styles.campaignMatches}>
                            <Text style={styles.header}>Your Matches</Text>
                            {campaignMatches.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
                        </View>}
                       {campaignSavedForLater && <View style={styles.campaignSavedForLater}>
                            <Text style={styles.header}>Saved for Later</Text>
                            {campaignSavedForLater.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
                        </View>}
                       {campaignApplied && <View style={styles.campaignApplied}>
                            <Text style={styles.header}>Applied</Text>
                            {campaignApplied.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
                        </View>}
                       {campaignActive && <View style={styles.campaignActive}>
                            <Text style={styles.header}>Active</Text>
                            {campaignActive.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
                        </View>}
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