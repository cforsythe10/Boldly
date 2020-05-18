import React, { useState, useCallback } from 'react'
import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect, useStore } from 'react-redux'
import styles from './Styles/CampaignBuilderStyle'
import TextFieldTall from '../Ui/TextFieldTall'
import PrimaryButtonLarge from '../Ui/PrimaryButtonLarge'
import { TabBar, TabView } from 'react-native-tab-view'
import TextField from '../Ui/InputFields/InputField'
import LocationInputField from '../Ui/InputFields/LocationInputField'
import { addCampaignData, sendCampaignData } from '../../Redux/campaignBuilder/campaignBuilderActions';
import TextArea from '../Ui/TextArea';
import Calendar from '../Ui/Calendar';
import ValuesModal from '../Ui/ValuesModal';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import ToggleSwitch from 'toggle-switch-react-native';


import ColoredIcon from '../Ui/ColoredIcon';

const ViewRoute = ({currentCampaign}) => {
	const store = useStore();
    const account = store.getState().loginReducer.loginReducer.account;
    const currCampaign = store.getState().campaignBuilder.currentCampaign;

    let values = account.values.split(',');
    let isCreator = account.birthday;

    const saveDraft = () => {
  		addCampaignData('isDraft', true);
  		sendCampaignData(account);
  	}

	return (
		<ScrollView style={styles.fullScreen}>
			<View style={styles.profileScroll}>
          	<ScrollView  borderRadius={15} resizeMode="cover">
          
            <ImageBackground source={null} style={styles.coverImage} >
                <LinearGradient colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']} style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View style={styles.profileHeader}>
	                  <Text style={styles.h3}>
	                    { currCampaign.name }
	                  </Text>
	                  <Text style={styles.sh3}>
	                    { currCampaign.industry }
	                  </Text>
                  </View>
                </LinearGradient>
                
            </ImageBackground>

            <View style={styles.profileSection}>
              <Text style={styles.h5}>
               	Campaign Values
              </Text>
              
              <View style={styles.valueDisplay}>
                {currCampaign.values.split(',').length > 0 ? <ColoredIcon svgName={currCampaign.values.split(',')[0]} text={currCampaign.values.split(',')[0]} /> : null}
                {currCampaign.values.split(',').length > 1 ? <ColoredIcon svgName={currCampaign.values.split(',')[1]} text={currCampaign.values.split(',')[1]} /> : null}
                {currCampaign.values.split(',').length > 2 ? <ColoredIcon svgName={currCampaign.values.split(',')[2]} text={currCampaign.values.split(',')[2]} /> : null}
              </View>
            </View>

            <View style={styles.profileSection}>
                <Text style={styles.h5}>
                    Description
                </Text>             
                <View style={styles.mockTextArea}>
                <Text style={styles.body}> 
                	{currCampaign.description}
                </Text>
             	</View>
            </View>

            <View style={styles.profileSection}>
              <Text style={styles.h5}>
                Duration
              </Text>
              <View style={styles.mockTextField}>
                <Text style={styles.body}>
                { currCampaign.startDate.substring(0,15) + ' - ' + currCampaign.endDate.substring(0,15) }
                </Text>
              </View>
            </View>

            <View style={styles.profileSection}>

              <Text style={styles.h5}>
                Compensation
              </Text>
               <View style={styles.mockTextField}>
                <Text style={styles.body}>
                { currCampaign.compensation }
                </Text>
              </View>
            </View>
			
            <View style={styles.profileSection}>

              <Text style={styles.h5}>
                Creator Responsibilities
              </Text>
               <View style={styles.mockTextArea}>
                <Text style={styles.body}>
                { currCampaign.creatorResponsibilities }
                </Text>
              </View>
            </View>

            <View style={styles.profileSection}>

              <Text style={styles.h5}>
                Perks of the Program
              </Text>
               <View style={styles.mockTextArea}>
                <Text style={styles.body}>
                { currCampaign.perks }
                </Text>
              </View>
               <View style={styles.submitButtonContainer}>
					{/** Needs to be some type of error handling if user doesn't fill everything out **/} 
					<PrimaryButtonLarge text="Save & publish" onPress={() => sendCampaignData(account)}/>
					<Text style={styles.link} onPress={() => saveDraft()}> Save as draft</Text>
				</View>
            </View>

            <View style={styles.profileSection}>

              <Text style={styles.h5}>
                Creator Responsibilities
              </Text>
               <View style={styles.mockTextField}>
                <Text style={styles.body}>
                { currCampaign.creatorResponsibilities }
                </Text>
              </View>
            </View>
            <View style={styles.profileSection}>

              <Text style={styles.h5}>
                Creator Responsibilities
              </Text>
               <View style={styles.mockTextArea}>
                <Text style={styles.body}>
                { currCampaign.creatorResponsibilities }
                </Text>
              </View>
            </View>

          </ScrollView>
          </View>
		</ScrollView>
	);
};

let toggleState = false;
let photoSelected = false;
let valuesSelected = {
	communitySelected: true,
	diversitySelected: true,
	educationSelected: true,
	familySelected: false,
	innovationSelected: false,
	spiritualitySelected: false,
	sustainabilitySelected: false,
	traditionSelected: false,
	wellnessSelected: false
};

const EditRoute = ({currentCampaign, addCampaignData, sendCampaignData}) => {
	const flip = () => {
		toggleState = !toggleState;
		addCampaignData("local", toggleState);
	};

	const calendarCallback = (getDate,dateType) => {
        //sets start date or end date in state based on type
        if (dateType === 'END_DATE' ) {
            addCampaignData('endDate', getDate);
        } else {
            addCampaignData('startDate', getDate);
        }
    }

    const selectPhoto = async () => {
		try {
		  	const res = await DocumentPicker.pick({
		    	type: [DocumentPicker.types.images],
		 	});

			RNFetchBlob.fs.readFile(res.uri, 'base64')
				.then((data) => {
					//use type and base 64 encoded data, will be able to convert back from anything
					addCampaignData('photoRef', data);
					photoSelected = !photoSelected;
				});
		} catch (err) {
		  if (DocumentPicker.isCancel(err)) {
		    // User cancelled the picker, exit any dialogs or menus and move on
		  } else {
		    throw err;
		  }
		}
	}


    const getValues = (values) => {
  		let arr = [];
  		if(values.communitySelected) arr.push('Community');
  		if(values.diversitySelected) arr.push('Diversity');
  		if(values.educationSelected) arr.push('Education');
  		if(values.familySelected) arr.push('Family');
  		if(values.innovationSelected) arr.push('Innovation');
  		if(values.spiritualitySelected) arr.push('Spirituality');
  		if(values.sustainabilitySelected) arr.push('Sustainability');
  		if(values.traditionSelected) arr.push('Tradition');
  		if(values.wellnessSelected) arr.push('Wellness');

  		return arr.join(',');
  	}

  	const valuesCallback = (values) => {
  		valuesSelected = values;
  		addCampaignData('values', getValues(values));
  	}

  	const store = useStore();
    const account = store.getState().loginReducer.loginReducer.account;

  	const saveDraft = () => {
  		addCampaignData('isDraft', true);
  		sendCampaignData(account);
  	}

	return(
	<ScrollView style={styles.container}>
			<View style={styles.inputContainer} >
				<Text style={styles.inputTitleText}>Name</Text>
				<TextFieldTall placeholder="Enter Name" onChangeText={data => addCampaignData("name", data)} />
			</View>

			<View style={styles.inputContainer} >
				<Text style={styles.inputTitleText}>Photo</Text>
				<TouchableOpacity style={photoSelected ? styles.photoInputFull : styles.photoInputEmpty} onPress={() => selectPhoto()}>
					{photoSelected ? null : <Text style={styles.inputTitleText}>+</Text> }
					<Text style={styles.inputTitleText}>{photoSelected ? 'Change your campaign photo' : 'Upload your campaign photo' }</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.inputContainer} >
				<Text style={styles.inputTitleText}>Description</Text>
				<TextArea placeholder="" onChangeText={data=> addCampaignData("description", data)} />
			</View>

			<View style={styles.inputContainer} >
				<Text style={styles.inputTitleText}>Values</Text>
				<ValuesModal values={['Community', 'Diversity', 'Education']} callback={valuesCallback} />
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Duration</Text>
			</View>
			<Calendar range={true} callback={calendarCallback} />

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Creator Responsibilities</Text>
				<TextArea placeholder="Post requirements, accounts to tag, hashtags to use, additional requirements (such as sending content for approval)" onChangeText={text => addCampaignData("creatorResponsibilities", text)} />
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Compensation</Text>
				<TextFieldTall placeholder="Dolar amount to be recieved in compensation" onChangeText={text => addCampaignData("compensation", text)} />
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Perks of the Program</Text>
				<TextArea placeholder="Any extra perks for the participants? This includes exposure, swag, etc." onChangeText={text => addCampaignData("perks", text)} />
			</View>

			<Text style={styles.header}>Participant Information</Text>


			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Location</Text>
				<LocationInputField callback={text => addCampaignData("location", text.description)} darkBg={false} />
			</View>

			<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
				<ToggleSwitch isOn={toggleState} onToggle={() => flip()} />
				<Text style={styles.inputTitleText}>This campaign is specific to this location</Text>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Industry</Text>
				<TextFieldTall placeholder="Select industry" onChangeText={text => addCampaignData("industry", text)} /> 
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Follower Count</Text>
				<TextFieldTall placeholder="Minimum # of followers" onChangeText={text => addCampaignData("followerCount", text)} /> 
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Engagement Rate</Text>
				<TextFieldTall placeholder="Minimum % of engagement" onChangeText={text => addCampaignData("engagementRate", text)} />
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Interests</Text>
				<TextFieldTall placeholder="Select interests" onChangeText={text => addCampaignData("interests", text)} />
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitleText}>Age Range</Text>
				<TextFieldTall placeholder="Select age range" onChangeText={text => addCampaignData("ageRange", text)} /> 
			</View>

			<View style={styles.submitButtonContainer}>
				{/** Needs to be some type of error handling if user doesn't fill everything out **/}
				<PrimaryButtonLarge text="Save & publish" onPress={() => sendCampaignData(account)}/> 
				<Text style={styles.link} onPress={() => saveDraft()}> Save as draft</Text>
			</View>
	</ScrollView>
);}


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
