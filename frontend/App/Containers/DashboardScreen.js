import React, { Component } from 'react';
import { useStore } from 'react-redux';
import { Text, View } from 'react-native';

import Header from '../Components/Ui/Header'
import PrimaryButtonLarge from '../Components/Ui/PrimaryButtonLarge';

import DashboardMissingProfileElements from './DashboardMissingProfileElements';
import DashboardMissingProfileElementsBrand from './DashboardMissingProfileElementsBrand';
import DashboardScreenRegular from './DashboardScreenRegular';
import DashboardScreenRegularBrand from './DashboardScreenRegularBrand';

import styles from './Styles/DashboardScreenStyle';
import { Fonts, Colors } from '../Themes';
import BoldlyImage from '../Components/Ui/BoldlyImage';
import { makePost } from '../Services/Api';
// import { testActionCreator } from '../Redux/createStore'; // Importing the neccassary action creators, ideally in one file
// import { connect } from 'react-redux'; // Import the connect function to connect your component/screen to redux state

// const DashboardScreen = ({someActionCreator}) => {
//     someActionCreator('data');


let conversations = [];
let campaigns = [];
let account = {};

export default class DashboardScreen extends Component {
    constructor(props){
        super(props);
    }

    getConversations(isCreator, id) {
        if(isCreator) {
            makePost('api/conversations/all', JSON.stringify({
                creator_id: id
            })).then(response => response.json())
            .then(data => {
                console.log(data);
                conversations = data.data;
            });
        } else {
            makePost('api/conversations/all', JSON.stringify({
                brand_id: id
            })).then(response => response.json())
            .then(data => {
                console.log(data);
                conversations = data.data;
            });
        }
    };

    getCampaigns(isCreator, id) {
        if(isCreator) {
            makePost('api/campaigns/all', JSON.stringify({
                creator_id: id
            })).then(response => response.json())
            .then(data => {
                console.log(data);
                campaigns = data.data;
            });
        } else {
            makePost('api/campaigns/all', JSON.stringify({
                brand_id: id
            })).then(response => response.json())
            .then(data => {
                console.log(data);
                campaigns = data.data;
            });
        }
    };

    componentDidMount() {
        setTimeout(() => {
            this.forceUpdate();
        }, 1000);
    }

    renderDashboard() {
        return (
            <View style={styles.fullScreen}>
                {account.birthday && !account.instagramAccount ? <DashboardMissingProfileElements navigation={this.props.navigation} /> : null}
                {!account.birthday && !account.instagramAccount ? <DashboardMissingProfileElementsBrand navigation={this.props.navigation} /> : null}
                {account.birthday && account.instagramAccount  ? <DashboardScreenRegular navigation={this.props.navigation} account={account} campaigns={campaigns} conversations={conversations} /> : null }
                {!account.birthday && account.instagramAccount ? <DashboardScreenRegularBrand navigation={this.props.navigation} account={account} campaigns={campaigns} conversations={conversations} /> : null }
            </View>
        )
    }

    dont() {
        return (
            <View style={styles.fullScreen}>
                <Header headerType='MenuProfile' navigation={this.props.navigation} />
                <View style={{flex:8}}></View>
            </View>
        )
    }

    render() {
        account = {...this.props.navigation.state.params.account};
        const isCreator = account.birthday;
        const id = account.id;

        this.getConversations(isCreator, id);
        this.getCampaigns(isCreator, id);

        return (
            <View style={styles.fullScreen}>
                {campaigns.current || campaigns.currently_active ? this.renderDashboard() : this.dont() }
            </View>
        )
    }
}