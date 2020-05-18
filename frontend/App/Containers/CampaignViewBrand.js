import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './Styles/CampaignViewBrandStyles';

import Card from '../Components/Ui/Card';
import Header from '../Components/Ui/Header';
import ApplicantCard from '../Components/Ui/ApplicantCard';

const CampaignViewBrand = ({navigation}) => {
	const currCampaign = navigation.state.params.campaign;

	console.log(currCampaign);

	const renderApplicant = (applicant) => {
		return <ApplicantCard applicant={applicant} navigation={navigation} />
	};

	const renderApplicants = (applicants) => {
		return applicants.map(applicant => renderApplicants(applicant));
	};

	return (
		<ScrollView>
			<Header headerType='MenuProfileTitle' title="Campaigns" navigation={navigation} />
			<ScrollView style={styles.fullScreen}>
				<Card campaign={currCampaign} navigation={navigation} isCreator={false} link={false} />
				{currCampaign.participants ? <Text style={styles.header}>{campaign.participants.length() + ' Active Participants'}</Text> : null}
			</ScrollView>
		</ScrollView>
	);
}

export default CampaignViewBrand;