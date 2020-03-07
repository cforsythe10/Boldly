import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/CampaignStyles';

const campaignTypes = ['Current', 'Past'];

const CampaignList = ({campaigns}) => {
    const [campaignTypeSelected, setCampaignType] = useState(campaignTypes[0]);

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
           </View>
           <View style={styles.campaignSavedForLater}>
                <Text>Saved for Later</Text>

           </View>
           <View style={styles.campaignApplied}>
                <Text>Applied</Text>

           </View>
           <View style={styles.campaignActive}>
                <Text>Active</Text>

           </View>
        </View>
    );
}

export default CampaignList;