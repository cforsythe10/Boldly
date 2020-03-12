import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  TextInput: {
    color: Colors.charcoal,
    fontSize: 14,
    opacity: 0.5,
    fontFamily: Fonts.type.link,
  },
  BorderStyle: {
    width: '100%',
    height: 37,  
    borderRadius: 10,
    opacity: 1.0,
    marginVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.white,
  }
})