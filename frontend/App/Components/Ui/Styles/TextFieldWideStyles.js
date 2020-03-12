import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  TextInput: {
    color: Colors.charcoal,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.5,
    fontFamily: Fonts.type.link
  },
  BorderStyle: {
    width: 275,
    height: 35,
    backgroundColor: Colors.white,
    borderWidth: 1, 
    borderColor: '#E3E3E3',
    borderRadius: 10,
    paddingLeft: 7,
    opacity: 1.0
  },
  TextAreaBorder: {
    width: '100%',
    height: 136,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 6,
    marginVertical: 8,
  }
})