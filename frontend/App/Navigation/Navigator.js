import { Dimensions } from 'react-native';
import { DrawerActions, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Dashboard from '../Containers/DashboardScreen';
import DashboardRegularC from '../Containers/DashboardScreenRegular';
import DashboardRegularB from '../Containers/DashboardScreenRegularBrand';
import DashboardMissingCreator from '../Containers/DashboardMissingProfileElements';
import DashboardMissingBrand from '../Containers/DashboardMissingProfileElementsBrand';
import DashboardNoCampaign from '../Containers/DashboardMissingCampaign';
import Messages from '../Containers/MessagesScreen';
import Campaign from '../Containers/CampaignScreen';
import Profile from '../Containers/ProfileScreen';
import Settings from '../Containers/SettingsScreen';
import SettingsBrand from '../Containers/SettingsBrand';
import SettingsCreator from '../Containers/SettingsCreator';

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
        SettingsBrand: {
            screen: SettingsBrand
        },
        SettingsCreator: {
            screen: SettingsCreator
        },
    },
    
	{
		drawerPosition: 'left',
		drawerWidth: WIDTH * 0.83,
		getCustomActionCreators: (route, stateKey) => { return { toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }) }; },
	},
)

const DashboardNavigator = createStackNavigator(
    {
        DashboardRegularC: {
            screen: DashboardRegularC
        },
        DashboardRegularB: {
            screen: DashboardRegularB
        },
        DashboardMissingProfileB: {
            screen: DashboardMissingBrand
        },
        DashboardMissingProfileC: {
            screen: DashboardMissingCreator
        },
        DashboardNoCampaign: {
            screen: DashboardNoCampaign
        }
    },
    {
        headerMode: 'none'
    }
)

const Navigator = createStackNavigator(
	{
		leftDrawer,
        DashboardNavigator,
        Profile: {
            screen: Profile
        }
	},
	{
		headerMode: 'none'
	}
)

export default createAppContainer(Navigator)