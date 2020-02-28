import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  head:{
  	marginTop: 8,
  	marginBottom: 8,
  	...Fonts.style.h3,
  	color: Colors.charcoal
  },
  text:{
  	marginTop: 8,
  	marginBottom: 8,
  	...Fonts.style.h5,
  	color: Colors.charcoal65  	
  },
  card:{
  	flex: 2,
  	alignItems: 'center',
  	backgroundColor: 'white',
  	borderRadius: 20
  }

})
