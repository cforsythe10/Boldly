import { createStackNavigator } from 'react-navigation-stack';

import MessagesScreen from '../Containers/MessagesScreen';
import ProfileScreen from '../Containers/ProfileScreen';

const MessagesNavigator = createStackNavigator({
	messages: { screen: MessagesScreen },
	profile: { screen: ProfileScreen }
});

export default MessagesNavigator;