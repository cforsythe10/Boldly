import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  bigText: {
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  smallText: {
  	...Fonts.style.h5,
  	color: Colors.fog
  }
})
