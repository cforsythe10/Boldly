import React, { Component } from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Colors } from '../../Themes';

import Header from '../Ui/Header'
import BoldlyImage from '../Ui/BoldlyImage'
import ColoredIcon from '../Ui/ColoredIcon'
import TextArea from '../Ui/TextArea';
import TextFieldTall from '../Ui/TextFieldTall';

import { makePost } from '../../Services/Api';

import styles from '../../Containers/Styles/ProfileScreenStyle';


const ProfileVeiw = (navigation) => {

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

  console.log(navigation.navigation.state);

  let account = {...navigation.navigation.state.params};

  let values = account.values.split(',');
  let isCreator = account.birthday;

  iterateVisits(account.id, isCreator);

  return(
    <View style={styles.fullScreen}>
        <Header headerType='MenuCheckTitle' title="Profile" navigation={navigation.navigation}/>
        <View style={{...styles.centerContentContainer, flex: 9}}>
          <View style={[styles.scene, styles.Fog]} >
            <View style={styles.profileScroll}>
            <ScrollView style={styles.fullScreen} borderRadius={15} resizeMode="cover">
            
              <ImageBackground source={null} style={styles.coverImage} >
                  <LinearGradient colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']} style={{flex: 1, justifyContent: 'flex-end'}}>
                    <View style={styles.profileHeader}>
                    <Text style={styles.h3}>
                      { account.name }
                    </Text>
                    <Text style={styles.sh3}>
                      { account.industry }
                    </Text>
                    <Text style={styles.sh3}>
                      Instagram info here
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
                <ImageBackground source={null} style={styles.postFeature} />
              </View>
            </ScrollView>
            </View>
          </View>
        </View>
      </View>
  );
}

export default ProfileVeiw;