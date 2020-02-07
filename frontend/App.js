import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DrawerNavigator from './App/Navigation/DrawerNavigator';

import CampaignNavigator from './App/Navigation/CampaignNavigator';
import DashboardNavigator from './App/Navigation/DashboardNavigator';
import MessagesNavigator from './App/Navigation/MessagesNavigator';
import SettingsNavigator from './App/Navigation/SettingsNavigator';


const AppNavigator = createDrawerNavigator(
  {
     Dashboard: {
      navigationOptions: {
        drawerLabel: 'Dashboard'
      },
      screen: DashboardNavigator
    },
    MessagesScreen: {
      navigationOptions: {
        drawerLabel: 'Messages'
      },
      screen: MessagesNavigator
    },
    Campaigns: {
      navigationOptions: {
        drawerLabel: 'Campaigns'
      },
      screen: CampaignNavigator
    },
    Settings: {
      navigationOptions: {
        drawerLabel: 'Settings'
      },
      screen: SettingsNavigator
    }
  }
);

export default createAppContainer(AppNavigator)