import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './Styles/CampaignViewBrandStyles';

import Card from '../Components/Ui/Card';
import Header from '../Components/Ui/Header';
import ApplicantCard from '../Components/Ui/ApplicantCard';

const CampaignViewBrand = ({navigation}) => {
	const currCampaign = navigation.state.params.campaign;
	const applicants = [];
	const participants = [];

	if(navigation.state.params.applicants.length > 0) navigation.state.params.applicants.map(participant => {
		if(participant.is_active) participants.push(participant);
		else if(participant.has_applied) applicants.push(participant);
	});

	const renderApplicant = (applicant) => {
		console.log(applicant);
		return <ApplicantCard key={applicant.creator.uuid} applicant={applicant} campaign={currCampaign} navigation={navigation} />
	};

	const renderApplicants = () => {
		return applicants.map(applicant => renderApplicant(applicant));
	};
	console.log(navigation.state.params);
	return (
		<ScrollView>
			<Header headerType='MenuProfileTitle' title="Campaigns" navigation={navigation} />
			<ScrollView style={styles.fullScreen}>
				<Card campaign={currCampaign} navigation={navigation} isCreator={false} link={false} />
				{participants.length > 0 ? <Text style={styles.header}>participants.length + ' Active Participants'</Text> : null}
				<Text style={styles.header}>{applicants.length} Applicant(s)</Text>
				{applicants.length > 0 ? renderApplicants() : null}
			</ScrollView>
		</ScrollView>
	);
}

export default CampaignViewBrand;