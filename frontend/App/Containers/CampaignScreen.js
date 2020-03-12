import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Header from '../Components/Ui/Header';
import { CampaignList, NoCampaigns } from '../Components/Campaign/index';

import styles from './Styles/CampaignScreenStyle'

export default CampaignScreen = ({navigation}) => {

	const [campaigns, modifyCampaigns] = useState(true);
	
	useEffect(() => {
		// call BE
		// modifyCampaigns({ // temp
		// 	mockData1: '1',
		// 	mockData2: '2',
		// 	mockData3: '3'
		// });
	});

	return (
		<View style={styles.fullScreen}>
    		<Header headerType='MenuProfile' />
			<View style={{...styles.centerContentContainer, flex: 9}}>
				{campaigns ? <CampaignList campaigns={campaigns} navigation={navigation} /> : <NoCampaigns navigation={navigation} />}
			</View>
    	</View>
	);
};