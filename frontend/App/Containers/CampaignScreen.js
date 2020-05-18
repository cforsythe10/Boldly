import React, { useState, useEffect, useCallback, TouchableOpacity, Text } from 'react';
import { useStore } from 'react-redux';
import { ScrollView, View } from 'react-native';

import PrimaryButtonPlus from '../Components/Ui/PrimaryButtonPlus';
import Header from '../Components/Ui/Header';
import { CampaignList, NoCampaigns } from '../Components/Campaign/index';

import styles from './Styles/CampaignScreenStyle'


export default CampaignScreen = ({navigation}) => {
	
	const [modifyCampaigns] = useState({});
	const mockedProfileNavigation = useCallback(() => navigation.navigate('Profile'), []);

	const store = useStore();
	const account = store.getState().loginReducer.loginReducer.account;

	return (
		<ScrollView style={styles.fullScreen}>
    		<Header headerType='MenuProfileTitle' title="Campaigns" navigation={navigation}/>
			<View style={{...styles.centerContentContainer, flex: 9}}>
				{(navigation.state.params.current || navigation.state.params.past) && !account.birthday ? <CampaignList campaigns={{current: navigation.state.params.current, past: navigation.state.params.past}} navigation={navigation} isCreator={false} /> : null}
				{(!navigation.state.params.current && !navigation.state.params.past) && !account.birthday ? <NoCampaigns navigation={navigation} /> : null}
				{(navigation.state.params.matched_with || navigation.state.params.currently_active || navigation.state.params.applied_to) && account.birthday ? <CampaignList isCreator={true} campaigns={{applied_to: navigation.state.params.applied_to, currently_active: navigation.state.params.currently_active, matched_with: navigation.state.params.matched_with}} navigation={navigation} /> : null}
			</View>
    	</ScrollView>
	);
};