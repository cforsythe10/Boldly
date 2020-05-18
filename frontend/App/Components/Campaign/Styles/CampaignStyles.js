import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../Themes/';
import ApplicationStyles from '../../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
    marginLeft: 10,
    color: Colors.cobalt,
    fontFamily: Fonts.style.h4.fontFamily,
    fontSize: Fonts.style.h4.fontSize
  },
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
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  campaignTypeButton: {
    width: '50%',
    paddingLeft: '25%',
  },
  campaignTypeText: {
  },
  selectedBar : {
    width: 205,
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.violet,
  },
  campaigns: {
    marginTop: 15,
  },
  campaignMatches: {
    margin: 10,
  },
  campaignSavedForLater: {
    margin: 10
  },
  campaignApplied: {
    margin: 10
  },
  campaignActive: {
    margin: 10
  },
  newCampaignContainer: {
    paddingLeft: '80%',
    paddingBottom: 10
  }
})