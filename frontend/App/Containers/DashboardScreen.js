import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native';

import MainHeader from '../Navigation/MainHeader';

import styles from './Styles/DashboardScreenStyle';

export default class DashboardScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        	<MainHeader navigation = { this.props.navigation } />
            <Text>DashboardScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
