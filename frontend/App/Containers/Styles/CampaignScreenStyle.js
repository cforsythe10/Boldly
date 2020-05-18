import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  newCampaignContainer:{
  	flexDirection: 'row',
  	alignItems: 'flex-end',
  	paddingRight: 10,
  	paddingBottom: 10,
  	minWidth: '100%'
  }
});
