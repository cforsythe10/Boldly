import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerText:{
  	...Fonts.style.h3,
  	color: Colors.text
  },
  // bodyText:{
  //   ...Fonts.style.body,
  //   color: Colors.text
  // },
})
