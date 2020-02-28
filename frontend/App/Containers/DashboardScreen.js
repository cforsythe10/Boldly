import React, { Component } from 'react';
import { ScrollView, Text, View, Button, KeyboardAvoidingView, FlatList } from 'react-native';
import MessageBox from '../Components/Ui/MessageBox'

import MainHeader from '../Navigation/MainHeader';

import styles from './Styles/DashboardScreenStyle';
import TextField from '../Components/Ui/InputFields/InputField';
import LocationInputField from '../Components/Ui/InputFields/LocationInputField';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView keyboardShouldPersistTaps='always' style={styles.container}>
      <MainHeader  />
        <Text>Dashboard  Screen</Text>
        <Button title='View Profile' onPress={() => navigation.navigate('Profile')} />
        <Button title='Hamburger' onPress={() => navigation.openDrawer()} />

        <LocationInputField />
    </ScrollView>
  )
}