import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	...Fonts.style.h3,
  	color: Colors.fog,
  	paddingVertical: '14%'
  },
  back:{
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  logoContainer: {
  	flex: 1,
  	height: '11%',
  	alignItems: 'center',
    justifyContent: 'center',
  	width: '100%',
  	backgroundColor: 'transparent',
  },
  contentContainer: {
  	flex: 9,
  	flexDirection: 'column',
  	alignItems: 'center'
  }
})
