import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CommunityImage from '../../Images/Icons/community-color.svg'
import DiversityImage from '../../Images/Icons/diversity-color.svg'
import EducationImage from '../../Images/Icons/education-color.svg'
import FamilyImage from '../../Images/Icons/family-color.svg'
import InnovationImage from '../../Images/Icons/innovation-color.svg'
import SpiritualityImage from '../../Images/Icons/spirituality-color.svg'
import SustainabilityImage from '../../Images/Icons/sustainability-color.svg'
import TraditionImage from '../../Images/Icons/tradition-color.svg'
import WellnessImage from '../../Images/Icons/wellness-color.svg'

import Colors from '../../Themes/Colors';
import styles from './Styles/CardStyles';

const GetSvg = (value) => {
    switch(value) {
        case('Community'):
            return <CommunityImage height={20} width={20} stroke={Colors.black}/>
        case('Diversity'): 
            return <DiversityImage height={20} width={20} stroke={Colors.black}/>
        case('Education'):
            return <EducationImage height={20} width={20} stroke={Colors.black}/>
        case('Family'): 
            return <FamilyImage height={20} width={20} stroke={Colors.black}/>
        case('Innovation'): 
            return <InnovationImage height={20} width={20} stroke={Colors.black}/>
        case('Spirituality'): 
            return <SpiritualityImage height={20} width={20} stroke={Colors.black}/>
        case('Sustainability'): 
            return <SustainabilityImage height={20} width={20} stroke={Colors.black}/>
        case('Tradition'): 
            return <TraditionImage height={20} width={20} stroke={Colors.black}/>
        case('Wellness'): 
            return <WellnessImage height={20} width={20} stroke={Colors.black}/>
    }
}

const Card = ({campaignImageSource, campaignName, campaignDescription, navigateToCampaignProfiles, values = null}) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => navigateToCampaignProfiles()}>
            <LinearGradient colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']} style={styles.backgroundImage}>
                <Text style={styles.header}>{campaignName}</Text>
                <View style={styles.otherCardInfo}>
                    <Text style={styles.description}>{campaignDescription}</Text>
                    <View style={styles.values}>
                        {values && values.map(value => 
                            <View key={value} >
                                <View style={styles.value}> 
                                    <View style={styles.valueButtonContainer}>
                                        {GetSvg(value)}
                                    </View>
                                </ View>
                            </View>
                        )}
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default Card;