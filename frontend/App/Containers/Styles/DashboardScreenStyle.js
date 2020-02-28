import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	marginTop: 8,
  	marginBottom: 8,
  	...Fonts.style.h4,
  	color: Colors.cobalt
  },
  insights:{
  	alignItems: 'center',
  	justifyContent: 'center',
  	flex: 2,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  messages:{
  	alignItems: 'center',
  	justifyContent: 'center',
  	flex: 8,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  campaigns:{
  	alignItems: 'center',
  	justifyContent: 'center',
	flex: 3,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  }
})
