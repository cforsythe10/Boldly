import { createStackNavigator, createAppContainer } from 'react-navigation'
import MessagesScreen from '../Containers/MessagesScreen'
import InsightScreen from '../Containers/InsightScreen'
import AcademyScreen from '../Containers/AcademyScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import CampaignScreen from '../Containers/CampaignScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  MessagesScreen: { screen: MessagesScreen },
  InsightScreen: { screen: InsightScreen },
  AcademyScreen: { screen: AcademyScreen },
  ProfileScreen: { screen: ProfileScreen },
  CampaignScreen: { screen: CampaignScreen },
  DashboardScreen: { screen: DashboardScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
