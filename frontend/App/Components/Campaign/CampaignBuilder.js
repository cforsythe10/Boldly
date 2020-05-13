import React, { useState, useCallback } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import styles from './Styles/CampaignBuilderStyle'
import TextFieldWide from '../Ui/TextFieldWide'
import PrimaryButtonLarge from '../Ui/PrimaryButtonLarge'
import { TabBar, TabView } from 'react-native-tab-view'
import TextField from '../Ui/InputFields/InputField'
import LocationInputField from '../Ui/InputFields/LocationInputField'
import { addCampaignData, sendCampaignData } from '../../Redux/campaignBuilder/campaignBuilderActions'

const ViewRoute = ({currentCampaign}) => {
	return (
		<ScrollView>
			{/** Insert "campaignView" Component with currCampaign info to render view */}
		</ScrollView>
	);
};

const EditRoute = ({currentCampaign, addCampaignData, sendCampaignData}) => (
	<ScrollView style={styles.container}>
		{/* <View style={styles.container}> */}
			<View style={styles.inputContainer} >
				<Text style={styles.inputTitleText}>Name</Text>
				<TextField placeholder="Enter Name" onChangeText={data => addCampaignData("name", data)} />
			</View>

			<View style={styles.inputContainer} >
				<Text style={styles.inputTitleText}>Photo</Text>
			</View>

			<View style={styles.inputContainer} >
				<Text style={styles.inputTitleText}>Description</Text>
				<TextField placeholder="" onChangeText={data=> addCampaignData("description", data)} />
			</View>

			<View style={styles.inputContainer} >
				<Text style={styles.inputTitleText}>Values</Text>

			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText} onChangeText={text => addCampaignData("duration", text)}>Duration</Text>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Creator Responsibilities</Text>
				<TextFieldWide placeholder="Enter Name" onChangeText={text => addCampaignData("creatorResponsibilities", text)} />
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Compensation</Text>
				<TextFieldWide placeholder="Enter Name" onChangeText={text => addCampaignData("compensation", text)} />
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Perks of the Program</Text>
				<TextFieldWide placeholder="Enter Name" onChangeText={text => addCampaignData("perks", text)} />
			</View>

			<Text style={styles.header}>Participant Information</Text>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText} onChangeText={text => addCampaignData("industry", text)} >Industry</Text>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText} onChangeText={text => addCampaignData("followerCount", text)}>Follower Count</Text>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText} onChangeText={text => addCampaignData("engagementRate", text)}>Engagement Rate</Text>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText} onChangeText={text => addCampaignData("interests", text)}>Interests</Text>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText} onChangeText={text => addCampaignData("ageRange", text)}>Age Range</Text>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Location</Text>
				<LocationInputField onChangeText={text => addCampaignData("location", text)} />
			</View>

			<View style={styles.submitButtonContainer}>
				{/** Needs to be some type of error handling if user doesn't fill everything out */} 
				<PrimaryButtonLarge text="Save & publish" onPress={() => sendCampaignData(currCampaign)}/>
			</View>
		{/* </View> */}
	</ScrollView>
);


const LazyPlaceholder = ({ route }) => (
	<View style={styles.scene}>
	  <Text>Loading {route.title}…</Text>
	</View>
);

const renderTabBar = props => (
	<TabBar
	  {...props}
	  indicatorStyle={styles.violet}
	  style={{ backgroundColor: '#f7f7f7' }}
	  activeColor= '#424242'
	  inactiveColor= '#848484'
	  labelStyle= {styles.h6}
	/>
  );

const CampaignBuilder = ({currentCampaign, addCampaignData, sendCampaignData}) => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'first', title: 'View' },
		{ key: 'second', title: 'Edit' }
	]);

	const renderScene = ({ route }) => {
		switch (route.key) {
			case 'first':
				return <ViewRoute currentCampaign={currentCampaign} />
			case 'second':
				return <EditRoute currCamcurrentCampaignpaign={currentCampaign} addCampaignData={addCampaignData} sendCampaignData={sendCampaignData} />
			default:
				return null;
		}
	}

	const renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

	return (
		<TabView
			lazy
			navigationState={{ index, routes}}
			renderScene={renderScene}
			renderTabBar={renderTabBar}
			renderLazyPlaceholder={renderLazyPlaceholder}
			onIndexChange={setIndex}
			initialLayout={{ width: Dimensions.get('window').width }}
			style={styles.fullScreen}
		/>
	);
}

const mapStateToProps = state => ({
	currentCampaign: state.campaignBuilder.currentCampaign
});

const mapDispatchToProps = dispatch => ({
	addCampaignData: (dataKey, data) => dispatch(addCampaignData(dataKey, data)),
	sendCampaignData: campaignData => dispatch(sendCampaignData(campaignData))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignBuilder);
