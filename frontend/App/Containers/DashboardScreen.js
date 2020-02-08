import React, { Component } from 'react';
import { ScrollView, Text, View, Button, KeyboardAvoidingView } from 'react-native';
import MessageBox from '../Components/Ui/MessageBox'

import MainHeader from '../Navigation/MainHeader';

import styles from './Styles/DashboardScreenStyle';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <MainHeader  />
        <Text>Dashboard  Screen</Text>
        <Button title='View Profile' onPress={() => navigation.navigate('Profile')}>

        </Button>
        <Button title='Hamburger' onPress={() => navigation.openDrawer()}>
        </Button>

    </ScrollView>
  )

}