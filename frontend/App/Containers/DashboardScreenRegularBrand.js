import React, { Component } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../Components/Ui/Header'
import BoldlyImage from '../Components/Ui/BoldlyImage'

import * as MessagesActionCreators from '../Redux/Messages/MessagesActions';
import * as CampaignActionCreators from '../Redux/campaignBuilder/campaignBuilderActions';

import styles from './Styles/DashboardScreenStyle';

class DashboardScreenRegular extends Component {
constructor(props){
    super(props);
}

render(){
  let account = this.props.account;
  let campaigns = this.props.campaigns;
  let conversations = this.props.conversations;
  return (
    <View style={styles.fullScreen}>
        <Header headerType='MenuProfile' navigation={this.props.navigation}/>	
        <View style={styles.cardHeader}>
            <Text style={styles.text}>Insights</Text>
        </View>
        <View style={styles.centerContentContainer}>
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text>{account.profile_visits + ' creator(s) have visited your profile'}</Text>
                </View>
            </View>
        </View>
        <View style={styles.cardHeader}>
            <Text style={styles.text}>Messages</Text>
            <Text onPress={() => this.props.goToMessages({loginReducer: {loginReducer: {account: account}}, navigation: this.props.navigation})} style={styles.link}>Go to inbox</Text>
        </View>
        <View style={styles.centerContentContainer}>
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text>{conversations.length + ' active conversation(s) with creators'}</Text>
                </View>
            </View>
        </View>
        <View style={styles.cardHeader}>
            <Text style={styles.text}>Current Campaigns</Text>
            <Text onPress={() => this.props.getCampaigns({loginReducer: {loginReducer: {account: account}}, navigation: this.props.navigation})} style={styles.link}>See all</Text>
        </View>
        <View style={styles.centerContentContainer}>    
            <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                    <Text>{campaigns.currently_active.length + ' active campaign(s)'}</Text>
                </View>
            </View>
        </View>
    </View>
  )	
}

}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => (
  bindActionCreators({...MessagesActionCreators, ...CampaignActionCreators}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreenRegular);