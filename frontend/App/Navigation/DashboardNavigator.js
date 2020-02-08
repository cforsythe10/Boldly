import { createStackNavigator } from 'react-navigation-stack';

import DashboardScreen from '../Containers/DashboardScreen';
import ProfileScreen from '../Containers/ProfileScreen';

const DashboardNavigator = createStackNavigator({
	dashboard: { screen: DashboardScreen },
	profile: { screen: ProfileScreen }
});

export default DashboardNavigator;