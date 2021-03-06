import React, { Component } from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';
import { useStore, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCampaigns } from '../Redux/campaignBuilder/campaignBuilderActions';

import PrimaryButtonSmall from '../Components/Ui/PrimaryButtonSmall';

import { Colors } from '../Themes';

import Header from '../Components/Ui/Header'

import BoldlyImage from '../Components/Ui/BoldlyImage'

import styles from '../Components/Campaign/Styles/CampaignBuilderStyle';

import LinearGradient from 'react-native-linear-gradient';

import ColoredIcon from '../Components/Ui/ColoredIcon';

import { makePost } from '../Services/Api';

const CampaignApplicant = ({navigation, getCampaigns}) => {

  const iterateVisits = (id, isCreator) => {
    if(isCreator) {
      
      makePost('api/creators/increment', JSON.stringify({
        id: id
      })).then(response => response.json())
      .then(data => {
        console.log(data);
      });
    
    } else {

      makePost('api/brands/increment', JSON.stringify({
        id: id
      })).then(response => response.json())
      .then(data => {
        console.log(data);
      });

    }
  }

  const currCampaign = navigation.state.params.campaign;

  let applicant = navigation.state.params.applicant;

  let showButtons = true;

  const store = useStore();
  const account = store.getState().loginReducer.loginReducer.account;

  console.log(currCampaign);

  const declineApplicant = () => {
    makePost('/api/campaign/deactivate', JSON.stringify({
      campaign_id: currCampaign.id,
      creator_id: applicant.id
    })).then(response => response.json())
    .then(data => {
      console.log(data);
      getCampaigns({loginReducer: { loginReducer: { account: account}}, navigation: navigation});
    });
  };

  const acceptApplicant = () => {
    makePost('/api/campaign/activate', JSON.stringify({
      campaign_id: currCampaign.id,
      creator_id: applicant.id
    })).then(response => response.json())
    .then(data => {
      console.log(data);
      makePost('/api/conversations', JSON.stringify({
        conversation:{
          brand_id: account.id,
          creator_id: applicant.id
        }
      })).then(response => response.json())
      .then(data => {
        console.log(data);
        getCampaigns({loginReducer: { loginReducer: { account: account}}, navigation: navigation});
      });
      showButtons = false;
    });
  };

  iterateVisits(applicant.id, applicant.birthday);

  return (
    <View style={[styles.scene, styles.Fog]} >
      <View style={styles.profileScroll}>
      <ScrollView style={styles.fullScreen} borderRadius={15} resizeMode="cover">
      
        <ImageBackground source={null} style={styles.coverImage} >
            <LinearGradient colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']} style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={styles.profileHeader}>
              <Text style={styles.h3}>
                { applicant.name }
              </Text>
              <Text style={styles.sh3}>
                { applicant.industry }
              </Text>
              <Text style={styles.sh3}>
                Instagram info here
              </Text>
              </View>
            </LinearGradient>
            
        </ImageBackground>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            My Values
          </Text>
          
          <View style={styles.valueDisplay}>
            {applicant.values.split(',').length > 0 ? <ColoredIcon svgName={applicant.values.split(',')[0]} text={applicant.values.split(',')[0]} /> : null}
            {applicant.values.split(',').length > 1 ? <ColoredIcon svgName={applicant.values.split(',')[1]} text={applicant.values.split(',')[1]} /> : null}
            {applicant.values.split(',').length > 2 ? <ColoredIcon svgName={applicant.values.split(',')[2]} text={applicant.values.split(',')[2]} /> : null}
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            About Me
          </Text>
          
          
          <View style={styles.mockTextArea}>
            <Text style={styles.body}> 
            Put about me here
            </Text>
          </View>

          <View style={styles.mockTextField}>
            <Text style={styles.link}>
            Put website here
            </Text>
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            My Location
          </Text>
          <View style={styles.mockTextField}>
            <Text style={styles.body}>
            { applicant.location }
            </Text>
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            "My Featured Posts"
          </Text>
          <ImageBackground source={require('../Images/Janessa1.jpg')} style={styles.postFeature} />
        </View>
        {showButtons && <View style={{...styles.submitButtonContainer, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
          <PrimaryButtonSmall text="Decline" onPress={() => declineApplicant()}/>
          <PrimaryButtonSmall text="Accept" onPress={() => acceptApplicant()}/>
        </View>}
      </ScrollView>
      </View>
    </View>
  );
};


const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => (
  bindActionCreators({getCampaigns}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CampaignApplicant);