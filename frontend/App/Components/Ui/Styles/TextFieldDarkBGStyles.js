import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  TextInput: {
    color: Colors.fog,
    fontSize: 18,
    opacity: 0.5,
    fontFamily: Fonts.type.body
  },
  BorderStyle: {
    padding: 10, 
    paddingBottom: 1,
    width: 275, 
    height: 55,  
    borderBottomWidth: 1, 
    borderBottomColor: Colors.fog,
    opacity: 1.0
  }
})