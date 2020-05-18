import React, { useState, useEffect, useCallback, TouchableOpacity, Text } from 'react';
import { useStore } from 'react-redux';
import { ScrollView, View } from 'react-native';

import PrimaryButtonPlus from '../Components/Ui/PrimaryButtonPlus';
import Header from '../Components/Ui/Header';
import { CampaignList, NoCampaigns } from '../Components/Campaign/index';

import styles from './Styles/CampaignScreenStyle'


export default CampaignScreen = ({navigation}) => {
	
	const [campaigns, modifyCampaigns] = useState({});
	const mockedProfileNavigation = useCallback(() => navigation.navigate('Profile'), []);
	
	useEffect(() => {
		modifyCampaigns({
			campaignMatches: [{ // Mocked
				id: 'campaign1',
				campaignName: 'Campaign 1',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: '../../Images/Janessa2.jpg',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1', 'value2', 'value3']
			}],
			campaignSavedForLater: [{
				id: 'campaign2',
				campaignName: 'Campaign 2',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: 'https://via.placeholder.com/150x100',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1', 'value2', 'value3']
			}],
			campaignApplied: [{
				id: 'campaign3',
				campaignName: 'Campaign 3',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: 'https://via.placeholder.com/150x100',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1', 'value2']

			}],
			campaignActive: [{
				id: 'campaign4',
				campaignName: 'Campaign 4',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: 'https://via.placeholder.com/150x100',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1', 'value2']
			}, {
				id: 'campaign5',
				campaignName: 'Campaign 5',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: 'https://via.placeholder.com/150x100',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1']
			}],
			campaignPublished: [{
				id: 'campaign6',
				campaignName: 'Campaign 6',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: 'https://via.placeholder.com/150x100',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1', 'value2']
			}, {
				id: 'campaign5',
				campaignName: 'Campaign 5',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: 'https://via.placeholder.com/150x100',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1']
			}],
			campaignDraft: [{
				id: 'campaign7',
				campaignName: 'Campaign 4',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: 'https://via.placeholder.com/150x100',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1', 'value2']
			}, {
				id: 'campaign8',
				campaignName: 'Campaign 5',
				campaignDescription: 'Through 1 to 2',
				campaignImageSource: 'https://via.placeholder.com/150x100',
				navigateToCampaignProfiles: mockedProfileNavigation,
				values: ['value1']
			}]
		});
	}, []);

	const store = useStore();
	const account = store.getState().loginReducer.loginReducer.account;

	return (
		<ScrollView style={styles.fullScreen}>
    		<Header headerType='MenuProfileTitle' title="Campaigns" navigation={navigation}/>
			<View style={{...styles.centerContentContainer, flex: 9}}>
				{campaigns ? <CampaignList campaigns={campaigns} navigation={navigation} /> : <NoCampaigns navigation={navigation} />}
				{!account.birthday ? <PrimaryButtonPlus onPress={() => navigation.navigate('CampaignCreator')} /> : null}
			</View>
    	</ScrollView>
	);
};