import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView, Button } from 'react-native';

import MainHeader from '../Navigation/MainHeader';

import styles from './Styles/CampaignScreenStyle'

export default function CampaignScreen({ navigation }) {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <MainHeader  />
            <Text>Campaign  Screen</Text>
            <Button title='View Profile' onPress={() => navigation.navigate('Profile')}>

            </Button>
            <Button title='Hamburger' onPress={() => navigation.openDrawer()}>
            
            </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  
}