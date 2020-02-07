import { createStackNavigator } from 'react-navigation-stack';

import SettingsScreen from '../Containers/SettingsScreen';
import ProfileScreen from '../Containers/ProfileScreen';

const SettingsNavigator = createStackNavigator({
	dashboard: { screen: SettingsScreen },
	profile: { screen: ProfileScreen }
});

export default SettingsNavigator;