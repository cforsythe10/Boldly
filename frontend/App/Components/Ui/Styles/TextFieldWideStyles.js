import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  TextInput: {
    color: Colors.charcoal,
    fontSize: 10,
    opacity: 0.5,
    fontFamily: Fonts.type.link
  },
  BorderStyle: {
    width: 275,
    height: 35,  
    borderWidth: 1, 
    borderColor: '#E3E3E3',
    borderRadius: 10,
    paddingLeft: 7,
    opacity: 1.0
  }
})