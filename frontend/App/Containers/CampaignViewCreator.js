import React, { Component } from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';
import { useStore } from 'react-redux';

import PrimaryButtonMedium from '../Components/Ui/PrimaryButtonMedium';

import { Colors } from '../Themes';

import Header from '../Components/Ui/Header'

import BoldlyImage from '../Components/Ui/BoldlyImage'

import styles from '../Components/Campaign/Styles/CampaignBuilderStyle';

import LinearGradient from 'react-native-linear-gradient';

import ColoredIcon from '../Components/Ui/ColoredIcon';

import { makePost } from '../Services/Api';

const CampaignViewCreator = ({navigation}) => {
	const store = useStore();
  const account = store.getState().loginReducer.loginReducer.account;

  let values = account.values.split(',');
  let isCreator = account.birthday;

  const currCampaign = navigation.state.params.campaign;

  let showButtons = true;

  const denyCampaign = () => {
    makePost('/api/campaign/deactivate', JSON.stringify({
      campaign_id: currCampaign.id,
      creator_id: account.id
    })).then(response => response.json())
    .then(data => {
      console.log(data);
      showButtons = false;
    });
  };

  const applyToCampaign = () => {
    makePost('/api/campaign/apply', JSON.stringify({
      campaign_id: currCampaign.id,
      creator_id: account.id
    })).then(response => response.json())
    .then(data => {
      console.log(data);
      showButtons = false;
    });
  };

	return (
    <View>
      <Header headerType='MenuProfileTitle' title="Campaigns" navigation={navigation}/>
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
                  { currCampaign.startDate + ' - ' + currCampaign.endDate }
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
                {showButtons && <View style={{...styles.submitButtonContainer, flexDirection: 'row'}}>
                  <PrimaryButtonMedium text="Deny" onPress={() => denyCampaign()}/>
                  <PrimaryButtonMedium text="Apply" onPress={() => applyToCampaign()}/>
                </View>}
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
    </View>
	);
};

export default CampaignViewCreator;