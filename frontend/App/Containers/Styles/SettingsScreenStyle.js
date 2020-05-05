import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  headerText:{
    ...Fonts.style.h5
  },

  bodyText:{
	...Fonts.style.body,
	fontSize: 16,
	color: Colors.text,
	textAlign: 'left'
  },

  settingsHeader: {
    flex: 0.8,
    marginHorizontal: 15,
    marginVertical: 10,
    marginTop: 24,
    justifyContent: 'flex-end'
  },

  settingsScroll: {
    marginHorizontal: '2%',
      overflow: 'hidden',
  },

  settingsCard: {
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 15,
    flex: 1,
    paddingVertical: 5,
    width: '88%',
    backgroundColor: Colors.white,
    shadowRadius: 4,
    borderRadius: 10
  },

  invisibleSettingsCard: {
    justifyContent: 'center',
    marginHorizontal: 15,
    flex: 0.8,
    paddingVertical: 5,
    width: '88%',
    color: Colors.charcoal65,
  },

  settingsContent: {
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      flex: 1,
      paddingHorizontal: '4%',
      flexWrap: "nowrap",
      flexDirection: "row"
  },


  settingsInputCard: {
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: '4%',
    width: '100%',
    
    flexDirection: "row"
  },

  iconWithText: {
      flexDirection: 'row'
  },

  deleteSection: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 15,
    flex: 2.5,
    paddingVertical: 12,
    width: '88%',
    borderRadius: 10
  }, 

  deleteText:{
  ...Fonts.style.body,
  marginTop: 8,
	fontSize: 12,
	color: '#848484',
	textAlign: 'center',
	justifyContent: 'flex-end'
  },

  save:{
  paddingVertical: 30,
	alignItems: 'center',
	justifyContent: 'flex-start',
	flex: 6
  }
})
