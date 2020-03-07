import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../Themes/';
import ApplicationStyles from '../../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  newUserContentBar: {
    width: 160,
    borderColor: '#E1E1E1',
    alignItems: 'center',
  },
  contentText: {
    ...Fonts.captions,
    color: Colors.charcoal,
    paddingVertical: '7%',
    textAlign: 'center'
  },
  darkText: {
    marginTop: 8,
    marginBottom: 8,
    ...Fonts.style.h4,
    color: Colors.charcoal
  },
  campaignTypeBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  campaignTypeButton: {

  },
  selectedBar : {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: Colors.violet,
  },
  campaignMatches: {
    margin: 50
  },
  campaignSavedForLater: {
    margin: 50
  },
  campaignApplied: {
    margin: 50
  },
  campaignActive: {
    margin: 50
  },
})