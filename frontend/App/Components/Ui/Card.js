import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/CardStyles';

const Card = ({campaignImageSource, campaignName, campaignDescription, values = null}) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => alert('I was pressed')}>
            <ImageBackground imageStyle={{resizeMode: 'stretch', borderRadius: 10}} style={styles.backgroundImage} source={{url: campaignImageSource}}>
                <Text style={styles.header}>{campaignName}</Text>
                <View style={styles.otherCardInfo}>
                    <Text style={styles.description}>{campaignDescription}</Text>
                    <View style={styles.values}>
                        {values && values.map(value => 
                            <View key={value} style={styles.value}>
                                <Text>{value}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default Card;