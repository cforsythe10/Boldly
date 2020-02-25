import { Dimensions } from 'react-native';
import { DrawerActions, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Dashboard from '../Containers/DashboardScreen';
import Messages from '../Containers/MessagesScreen';
import Campaign from '../Containers/CampaignScreen';
import Profile from '../Containers/ProfileScreen';
import Settings from '../Containers/SettingsScreen';
import Default from '../Containers/DefaultScreen';
import Login from '../Containers/LoginScreen';
import Survey from '../Containers/SurveyScreen';

const WIDTH = Dimensions.get('window').width;

const leftDrawer = createDrawerNavigator(

	{
        Dashboard: {
			screen: Dashboard
        },
        Messages: {
            screen: Messages
        },
        Campaigns: {
            screen: Campaign
        },
        Settings: {
            screen: Settings
        }
    },
    
	{
		drawerPosition: 'left',
		drawerWidth: WIDTH * 0.83,
		getCustomActionCreators: (route, stateKey) => { return { toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }) }; },
	},
)

const Navigator = createStackNavigator(
	{
		Default: {
			screen: Default
		},
		leftDrawer,
        Profile: {
            screen: Profile
        },
        Login: {
        	screen: Login
        },
        Survey: {
        	screen: Survey
        }
	},
	{
		headerMode: 'none'
	}
)

export default createAppContainer(Navigator)