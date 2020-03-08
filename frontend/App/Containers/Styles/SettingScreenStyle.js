import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	marginTop: 8,
  	marginBottom: 8,
  	...Fonts.style.h4,
  	color: Colors.cobalt
  }
})
