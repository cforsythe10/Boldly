import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text1:{
  	...Fonts.style.h3,
  	color: Colors.fog,
  	paddingTop: '14%'
  },
  text2:{
  	...Fonts.style.h3,
  	color: Colors.fog,
  	paddingBottom: '14%'
  },
  back:{
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  contentContainer: {
  	flex: 9,
  	flexDirection: 'column',
  	alignItems: 'center'
  }
})
