import React, { useState } from 'react';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { useStore } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import styles from './Styles/CampaignStyles';
import Card from '../Ui/Card';
import { ScrollView } from 'react-native-gesture-handler';
import PrimaryButtonPlus from '../Ui/PrimaryButtonPlus';


/*


*/

const CurrentCampaign = ({current, navigation}) => {
    const store = useStore();
    const account = store.getState().loginReducer.loginReducer.account;

    let campaignPublished = [];
    let campaignDraft = [];
    if(!account.birthday) current.map(campaign => {if(!campaign.isDraft) campaignPublished.push(campaign); else campaignDraft.push(campaign)});

    return (
        <View style={styles.campaigns}>
            {account.birthday && current.matched_with.length > 0 && <View style={styles.campaignMatches}>
                <Text style={styles.header}>Your Matches</Text>
                {current.matched_with.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
            </View>}
            {account.birthday && current.applied_to.length > 0 && <View style={styles.campaignApplied}>
                <Text style={styles.header}>Applied</Text>
                {current.applied_to.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
            </View>}
            {account.birthday && current.currently_active.length > 0 && <View style={styles.campaignActive}>
                <Text style={styles.header}>Active</Text>
                {current.currently_active.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
            </View>}
            {!account.birthday && campaignPublished.length > 0 && <View style={styles.campaignPublished}>
                <Text style={styles.header}>Published</Text>
                {campaignPublished.map(campaignProps => <Card key={campaignProps.id} campaign={campaignProps} navigation={navigation} isCreator={false} />)}
            </View>}
            {!account.birthday && campaignDraft.length > 0 && <View style={styles.campaignDraft}>
                <Text style={styles.header}>Drafts</Text>
                {campaignDraft.map(campaignProps => <Card key={campaignProps.id} campaign={campaignProps} navigation={navigation} isCreator={false} />)}
            </View>}
            <View style={styles.newCampaignContainer}>
                {!account.birthday ? <PrimaryButtonPlus onPress={() => navigation.navigate('CampaignCreator')} /> : null}
            </View>
        </View>
    );
}

const PastCampaign = ({past, navigation}) => {
    return (
        <ScrollView>
            <View style={styles.campaigns}>
                {past && past.map(campaignProps => <Card key={campaignProps.id} campaign={campaignProps} navigation={navigation} link={false} />)}
            </View>
        </ScrollView>
    );
}

// This is our placeholder component for the tabs
// This will be rendered when a tab isn't loaded yet
// You could also customize it to render different content depending on the route
const LazyPlaceholder = ({ route }) => (
	<View style={styles.scene}>
	  <Text>Loading {route.title}…</Text>
	</View>
);

const renderTabBar = props => (
	<TabBar
	  {...props}
	  indicatorStyle={styles.violet}
	  style={{ backgroundColor: '#f7f7f7' }}
	  activeColor= '#424242'
	  inactiveColor= '#848484'
	  labelStyle= {styles.h6}
	/>
);

const CampaignList = ({campaigns, navigation, isCreator}) => {
    console.log(campaigns);
    const { current, past } = campaigns;
    
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Current' },
        { key: 'second', title: 'Past' }
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                if(!isCreator) return (<CurrentCampaign navigation={navigation} current={campaigns.current} />)
                else return (<CurrentCampaign navigation={navigation} current={campaigns} />)
            case 'second':
                return (<PastCampaign navigation={navigation} past={campaigns.past} />)
            default:
                return null;
        }
    }

    const renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

    return (
        <TabView
            lazy
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            renderLazyPlaceholder={renderLazyPlaceholder}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={styles.fullScreen}
        />
    );
}
export default CampaignList;