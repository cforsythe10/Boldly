import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './Styles/CampaignViewBrandStyles';

import Card from '../Components/Ui/Card';
import Header from '../Components/Ui/Header';
import ApplicantCard from '../Components/Ui/ApplicantCard';

const CampaignViewBrand = ({navigation}) => {
	const currCampaign = navigation.state.params.campaign;
	const applicants = navigation.state.params.applicants;

	console.log(currCampaign);
	console.log(applicants);

	const renderApplicant = (applicant) => {
		return <ApplicantCard applicant={applicant} navigation={navigation} />
	};

	const renderApplicants = () => {
		return applicants.map(applicant => renderApplicants(applicant));
	};

	return (
		<ScrollView>
			<Header headerType='MenuProfileTitle' title="Campaigns" navigation={navigation} />
			<ScrollView style={styles.fullScreen}>
				<Card campaign={currCampaign} navigation={navigation} isCreator={false} link={false} />
				{currCampaign.participants.length > 0 ? <Text style={styles.header}>{campaign.participants.length() + ' Active Participants'}</Text> : null}
				{applicants.length > 0 ? renderApplicants() : null}
			</ScrollView>
		</ScrollView>
	);
}

export default CampaignViewBrand;