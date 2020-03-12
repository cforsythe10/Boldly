import React, { useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './Styles/CardStyles';

const Card = ({cardBackgroundImage, campaignName, campaignDescription}) => {
    const [source, modifiedSource] = useState('');
    return (
        <View style={styles.cardContainer}>
            <ImageBackground source={source} style={styles.backgroundImage}>
                <Text style={styles.header}>{campaignName}</Text>
                <Text style={styles.description}>{campaignDescription}</Text>
            </ImageBackground>
        </View>
    );
}

export default Card;