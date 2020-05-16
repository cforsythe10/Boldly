import React from 'react';
import {View } from 'react-native';
import CampaignBuilder from '../Components/Campaign/CampaignBuilder';
import Header from '../Components/Ui/Header';
import styles from './Styles/CampaignScreenStyle';

const CampaignCreatorScreen = ({navigation}) => {

    return (
        <View style={styles.fullScreen}>
            <Header headerType='MenuProfileTitle' title="New Campaign" navigation={navigation}/>
            <View style={{marginLeft: 3, marginRight: 3, flex: 9}}>
                <CampaignBuilder navigation={navigation} />
			</View>        
        </View>
    );
}

export default CampaignCreatorScreen;