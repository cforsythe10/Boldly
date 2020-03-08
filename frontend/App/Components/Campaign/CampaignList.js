import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './Styles/CampaignStyles';

const campaignTypes = ['Current', 'Past'];

const CampaignList = ({campaigns}) => {
    const [campaignTypeSelected, setCampaignType] = useState(campaignTypes[0]);
    // const matchedCampaignsImages = campaigns.matchedCampaigns.images;
    // const savedCampaignsImages = campaigns.savedForLaterCampaigns.images;
    // const appliedCampaignsImages = campaigns.appliedCampaigns.images;
    // const activeCampaignsImages = campaigns.activeCampaigns.images;
    // useEffect(async () => {
    //     const campaignImages = axios.get(`${apiUrl}/${user}/images`); // Mock url for now
    //     // Might need to add some logic to handle campaign images logic
    //     setCampaignMatchesImages(campaignImages);
    // }, []);

    return (
        <View>
           <View style={styles.campaignTypeBar}>
                {campaignTypes.map(campaignType => 
                    <TouchableOpacity
                        style={styles.campaignTypeButton}
                        key={campaignType}
                        onPress={() => setCampaignType(campaignType)}
                    >
                        <Text>{campaignType}</Text>
                        {campaignType === campaignTypeSelected && <View style={styles.selectedBar} />}
                    </TouchableOpacity>
                )}
           </View>
           <View style={styles.campaignMatches}>
               <Text>Your Matches</Text>
                {/* map function for each card*/}
           </View>
           <View style={styles.campaignSavedForLater}>
                <Text>Saved for Later</Text>
                {/* map function for each card*/}
           </View>
           <View style={styles.campaignApplied}>
                <Text>Applied</Text>
                {/* map function for each card*/}
           </View>
           <View style={styles.campaignActive}>
                <Text>Active</Text>
                {/* map function for each card*/}
           </View>
        </View>
    );
}

export default CampaignList;