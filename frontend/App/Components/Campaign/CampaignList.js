import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/CampaignStyles';
import Card from '../Ui/Card';
import { ScrollView } from 'react-native-gesture-handler';

const CurrentCampaign = ({campaignMatches, campaignSavedForLater, campaignApplied, campaignActive}) => {
    return (
        <View style={styles.campaigns}>
            {campaignMatches && <View style={styles.campaignMatches}>
                <Text style={styles.header}>Your Matches</Text>
                {campaignMatches.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
            </View>}
            {campaignSavedForLater && <View style={styles.campaignSavedForLater}>
                <Text style={styles.header}>Saved for Later</Text>
                {campaignSavedForLater.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
            </View>}
            {campaignApplied && <View style={styles.campaignApplied}>
                <Text style={styles.header}>Applied</Text>
                {campaignApplied.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
            </View>}
            {campaignActive && <View style={styles.campaignActive}>
                <Text style={styles.header}>Active</Text>
                {campaignActive.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
            </View>}
        </View>
    );
}

const PastCampaign = ({campaignApplied}) => {
    return (
        <ScrollView>
            <View style={styles.campaigns}>
                {campaignApplied && campaignApplied.map(campaignProps => <Card key={campaignProps.id} {...campaignProps} />)}
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

const CampaignList = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Current' },
        { key: 'second', title: 'Past' }
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return (<CurrentCampaign campaignMatches = {campaignMatches} campaignSavedForLater={campaignSavedForLater} campaignApplied={campaignApplied} campaignActive={campaignActive} />)
            case 'second':
                return (<PastCampaign campaignApplied={campaignApplied} />)
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