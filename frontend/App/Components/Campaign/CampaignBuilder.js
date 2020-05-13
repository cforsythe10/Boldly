import React, { Component, useState, useCallback } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import styles from './Styles/CampaignBuilderStyle'
import TextFieldWide from '../Ui/TextFieldWide'
import TextArea from '../Ui/TextArea'
import PrimaryButtonLarge from '../Ui/PrimaryButtonLarge'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view'
import TextField from '../Ui/InputFields/InputField'
import axios from 'axios'

const ViewRoute = () => {
	return (
		<ScrollView>
			<Text>Some Text</Text>
		</ScrollView>
	);
};

const EditRoute = () => {
	const [campaignData, setCampaignData] = useState({});
	const [campaignSetSuccess, setcampaignSetSuccess] = useState(false);
	
	const addCampaignData = (dataKey, data) => {
		setCampaignData({
			...campaignData,
			[dataKey]: data 
		})};
	
	const sendCampaignData = async () => {
		console.log(campaignData); // For testing
		const res = await axios.post("Insert post");
		if (res === 200) {
			setcampaignSetSuccess(true);
		}
		setcampaignSetSuccess(false);
	}

	return (
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
					<TextFieldWide placeholder="Enter Name" onChangeText={text => addCampaignData({creatorResponsibilities: text})} />
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputTitleText}>Compensation</Text>
					<TextFieldWide placeholder="Enter Name" onChangeText={text => addCampaignData({compensation: text})} />
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputTitleText}>Perks of the Program</Text>
					<TextFieldWide placeholder="Enter Name" onChangeText={text => addCampaignData({perks: text})} />
				</View>

				<Text style={styles.header}>Participant Information</Text>

				<View style={styles.inputContainer}>
					<Text style={styles.inputTitleText} onChangeText={text => addCampaignData({industry: text})} >Industry</Text>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputTitleText} onChangeText={text => addCampaignData({followerCount: text})}>Follower Count</Text>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputTitleText} onChangeText={text => addCampaignData({engagementRate: text})}>Engagement Rate</Text>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputTitleText} onChangeText={text => addCampaignData({interests: text})}>Interests</Text>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputTitleText} onChangeText={text => addCampaignData({ageRange: text})}>Age Range</Text>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputTitleText}>Location</Text>
				</View>

				<View style={styles.submitButtonContainer}>
					<PrimaryButtonLarge text="Save & publish" onPress={() => sendCampaignData}/>
				</View>
			{/* </View> */}
		</ScrollView>
	);
}

// This is our placeholder component for the tabs
// This will be rendered when a tab isn't loaded yet
// You could also customize it to render different content depending on the route
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

export default class CampaignBuilder extends Component {
	state = {
		index: 0,
		routes: [
			{ key: 'first', title: 'View' },
			{ key: 'second', title: 'Edit' }
		]
	};

	_handleIndexChange = index => this.setState({ index });

	_renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

	render () {
		return (
			<TabView
				lazy
				navigationState={this.state}
				renderScene={SceneMap({
					first: ViewRoute,
					second: EditRoute,
				})}
				renderTabBar={renderTabBar}
				renderLazyPlaceholder={this._renderLazyPlaceholder}
				onIndexChange={this._handleIndexChange}
				initialLayout={{ width: Dimensions.get('window').width }}
				style={styles.fullScreen}
			/>
		);
	}
}
