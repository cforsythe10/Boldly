import React, { Component } from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';
import { useStore } from 'react-redux';

import { Colors } from '../../Themes';

import Header from '../Ui/Header'

import BoldlyImage from '../Ui/BoldlyImage'

import styles from './Styles/CampaignViewStyles';

import LinearGradient from 'react-native-linear-gradient';

import ColoredIcon from '../Ui/ColoredIcon'

const CampaignView = ({currentCampaign}) => {
	const store = useStore();
  const account = store.getState().loginReducer.loginReducer.account;

  let values = account.values.split(',');
  let isCreator = account.birthday;

	return (
		<ScrollView>
			<View style={styles.profileScroll}>
          	<ScrollView style={styles.fullScreen} borderRadius={15} resizeMode="cover">
          
            <ImageBackground source={currentCampaign.photoRef} style={styles.coverImage} >
                <LinearGradient colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']} style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View style={styles.profileHeader}>
                  <Text style={styles.h3}>
                    { account.name }
                  </Text>
                  <Text style={styles.sh3}>
                    { account.industry }
                  </Text>
                  <Text style={styles.sh3}>
                      Test
                  </Text>
                  </View>
                </LinearGradient>
                
            </ImageBackground>
            <View style={styles.profileSection}>
              <Text style={styles.h5}>
                {isCreator ? "My Values" : "Our Values"}
              </Text>
              
              <View style={styles.valueDisplay}>
                <ColoredIcon svgName={values[0]} text={values[0]} />
                <ColoredIcon svgName={values[1]} text={values[1]} />
                <ColoredIcon svgName={values[2]} text={values[2]} />
              </View>
            </View>
            <View style={styles.profileSection}>
              <Text style={styles.h5}>
                { isCreator ? "About Me" : "About Us" }
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
                { isCreator ? "My Location" : "Our Location" }
              </Text>
              <View style={styles.mockTextField}>
                <Text style={styles.body}>
                { account.location }
                </Text>
              </View>
            </View>
            <View style={styles.profileSection}>
              <Text style={styles.h5}>
                { isCreator ? "My Featured Posts" : "Our Featured Posts" }
              </Text>
              <ImageBackground source={require('../../Images/Janessa1.jpg')} style={styles.postFeature} />
            </View>
          </ScrollView>
          </View>
		</ScrollView>
	);
};

export default CampaignView;