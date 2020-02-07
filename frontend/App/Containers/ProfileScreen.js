import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native';

import MainHeader from '../Navigation/MainHeader';

import styles from './Styles/ProfileScreenStyle';

export default class ProfileScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        	<MainHeader navigation = { this.props.navigation } />
            <Text>ProfileScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}