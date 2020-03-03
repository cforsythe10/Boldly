import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  contentContainer: {
  	flex: 4,
  	alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: '11%',
  	width: '100%',
  	backgroundColor: 'transparent',
  },
  continueContainer: {
  	flex: 1,
  	height: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  	width: '100%',
  	backgroundColor: 'transparent'
  },
  textFieldFormatter: {
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  preview: {
  	paddingTop: '25%'
  }
})
