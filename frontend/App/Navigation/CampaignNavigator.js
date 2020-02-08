import { createStackNavigator } from 'react-navigation-stack';

import CampaignScreen from '../Containers/CampaignScreen';
import ProfileScreen from '../Containers/ProfileScreen';

const CampaignNavigator = createStackNavigator({
	campaign: { screen: CampaignScreen },
	profile: { screen: ProfileScreen }
});

export default CampaignNavigator;