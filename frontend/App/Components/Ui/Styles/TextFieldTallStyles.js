import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  TextInput: {
    color: Colors.charcoal,
    fontSize: 14,
    opacity: 0.5,
    fontFamily: Fonts.type.link
  },
  BorderStyle: {
    width: 250,
    height: 40,  
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    opacity: 1.0
  }
})