import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native';

import MainHeader from '../Navigation/MainHeader';

import styles from './Styles/CampaignScreenStyle'

export default class CampaignScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        	<MainHeader navigation = { this.props.navigation } />
            <Text>CampaignScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
