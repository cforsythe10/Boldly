import React, { Component } from 'react';
import { ScrollView, Text, Button, KeyboardAvoidingView } from 'react-native';

import MainHeader from '../Navigation/MainHeader';

import styles from './Styles/ProfileScreenStyle';

export default function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior='position'>
        <MainHeader  />
          <Text>Settings Screen</Text>
          <Button title='View Profile' onPress={() => navigation.navigate('Profile')}>

          </Button>
          <Button title='Hamburger' onPress={() => navigation.openDrawer()}>
          
          </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  )

}