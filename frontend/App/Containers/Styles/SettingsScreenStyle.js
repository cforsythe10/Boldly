import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  headerText:{
  	fontSize: 16,
  	fontWeight: 'bold',
  	color: Colors.text
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
    justifyContent: 'flex-end'
  },

  settingsCard: {
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 15,
    flex: 0.8,
    paddingVertical: 5,
    width: '88%',
    backgroundColor: Colors.white,
    shadowRadius: 4,
    borderRadius: 10
  },

  settingsContent: {
      justifyContent: 'center',
      flex: 0.77,
      paddingHorizontal: '4%',
  },

  settingsInputCard: {
      justifyContent: 'center',
      flex: 0.7,
      paddingHorizontal: '4%',
  },

  iconWithText: {
      flexDirection: 'row'
  },

  deleteSection: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    flex: 2.5,
    paddingVertical: 3,
    width: '88%',
    borderRadius: 10
  }, 

  deleteText:{
	...Fonts.style.body,
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
