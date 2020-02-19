import * as React from 'react';
import { ScrollView, Text, Button } from 'react-native';

import MainHeader from '../Navigation/MainHeader';
import BoldlyImage from '../Components/Ui/BoldlyImage'

import styles from './Styles/DashboardScreenStyle';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <MainHeader  />
        <Text>Dashboard  Screen</Text>
        <Button title='View Profile' onPress={() => navigation.navigate('Profile')} />
        <Button title='Hamburger' onPress={() => navigation.openDrawer()} />
        <BoldlyImage image='ir' size='large' />
    </ScrollView>
  );
}