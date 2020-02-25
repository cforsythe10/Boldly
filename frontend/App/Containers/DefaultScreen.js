import React, { Component } from 'react';
import { View, Text } from 'react-native';

import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';
import PrimaryButtonSmall from '../Components/Ui/PrimaryButtonSmall';

import styles from './Styles/DefaultScreenStyles';

export default function DefaultScreen({ navigation }) {
  return (
    <View style={{ height: '100%', backgroundColor: '#000000' }}>
      <Text style={ styles.bigText }>Live your values.</ Text>
      <Text style={ styles.bigText }>Grow together.</ Text>
      <PrimaryButtonLarge text='Get started' onPress = {() => navigation.navigate('Survey')} />
      <Text style={ styles.smallText }>Already have an account?</ Text>
      <PrimaryButtonSmall text='Log in' onPress = {() => navigation.navigate('Login')} />
    </ View>
  )

}