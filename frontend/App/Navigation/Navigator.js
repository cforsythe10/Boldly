import { Dimensions } from 'react-native';
import { DrawerActions, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Dashboard from '../Containers/DashboardScreen';
import DashboardRegularC from '../Containers/DashboardScreenRegular';
import DashboardRegularB from '../Containers/DashboardScreenRegularBrand';
import DashboardMissingCreator from '../Containers/DashboardMissingProfileElements';
import DashboardMissingBrand from '../Containers/DashboardMissingProfileElementsBrand';
import DashboardNoCampaign from '../Containers/DashboardMissingCampaign';

import Messages from '../Containers/MessagesScreen';
import DirectMessages from '../Containers/DirectMessages.js';

import Campaign from '../Containers/CampaignScreen';
import Profile from '../Containers/ProfileScreen';
import Settings from '../Containers/SettingsScreen';
import SettingsBrand from '../Containers/SettingsBrand';
import SettingsCreator from '../Containers/SettingsCreator';
import SettingsEmail from '../Containers/SettingsEmail';
import SettingsPassword from '../Containers/SettingsPassword';
import SettingsPayment from '../Containers/SettingsPayment';

import Default from '../Containers/DefaultScreen';
import Login from '../Containers/LoginScreen';
import Survey from '../Containers/SurveyScreen';

import Survey1 from '../Containers/SurveyContent/Survey1';
import Survey2 from '../Containers/SurveyContent/Survey2';
import Survey3 from '../Containers/SurveyContent/Survey3';
import Survey4 from '../Containers/SurveyContent/Survey4';
import Survey5 from '../Containers/SurveyContent/Survey5';
import Survey6 from '../Containers/SurveyContent/Survey6';
import Survey7 from '../Containers/SurveyContent/Survey7';
import Survey8 from '../Containers/SurveyContent/Survey8';
import Survey9 from '../Containers/SurveyContent/Survey9';
import SurveyCreatorExtra1 from '../Containers/SurveyContent/SurveyCreatorExtra1';
import SurveyCreatorExtra2 from '../Containers/SurveyContent/SurveyCreatorExtra2';
    
// 	{
// 		drawerPosition: 'left',
// 		drawerWidth: WIDTH * 0.83,
// 		getCustomActionCreators: (route, stateKey) => { return { toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }) }; },
// 	},
// )

const WIDTH = Dimensions.get('window').width;

const surveyNavigator = createStackNavigator(
	{
		Survey: {
			screen: Survey
		},
		Survey1: {
			screen: Survey1
		},
		Survey2: {
			screen: Survey2
		},
		Survey3: {
			screen: Survey3
		},
		Survey4: {
			screen: Survey4
		},
		Survey5: {
			screen: Survey5
		},
		Survey6: {
			screen: Survey6
		},
		Survey7: {
			screen: Survey7
		},
		Survey8: {
			screen: Survey8
		},
		Survey9: {
			screen: Survey9
		},
		SurveyCreatorExtra1: {
			screen: SurveyCreatorExtra1
		},
		SurveyCreatorExtra2: {
			screen: SurveyCreatorExtra2
		}
	},
	{
		headerMode: 'none'
	}
);


const Navigator = createStackNavigator(
	{
		Default: {
			screen: Default
		},
		Dashboard: {
			screen: Dashboard
		},
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
        },
        Messages: {
            screen: Messages
        },
        DirectMessages: {
        	screen: DirectMessages
        },
        Campaigns: {
            screen: Campaign
        },
        Settings: {
            screen: Settings
        },
        SettingsBrand: {
            screen: SettingsBrand
        },
        SettingsCreator: {
            screen: SettingsCreator
        },
        SettingsEmail: {
            screen: SettingsEmail
        },
        SettingsPassword: {
            screen: SettingsPassword
        },
        SettingsPayment: {
            screen: SettingsPayment
        },
        Profile: {
            screen: Profile
        },
        Login: {
        	screen: Login
        },
        surveyNavigator
	},
	{
		headerMode: 'none'
	}
)

export default createAppContainer(Navigator)