import React, { Component } from 'react';
import { ScrollView, Text, Button, KeyboardAvoidingView } from 'react-native';

import MainHeader from '../Navigation/MainHeader';

import styles from './Styles/MessagesScreenStyle';

export default function MessagesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior='position'>
        <MainHeader  />
          <Text>Messages  Screen</Text>
          <Button title='View Profile' onPress={() => navigation.navigate('Profile')}>

          </Button>
          <Button title='Hamburger' onPress={() => navigation.openDrawer()}>
          
          </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  )

}