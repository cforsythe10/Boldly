import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  TextInput: {
    color: Colors.charcoal,
    fontSize: 14,
    opacity: 0.5,
    fontFamily: Fonts.type.link,
    paddingTop: 5,
    paddingBottom: 0,
    
    alignItems: 'center',
  },
  BorderStyle: {
    width: '100%',
    height: 37,  
    borderRadius: 10,
    opacity: 1.0,
    marginVertical: 8,
    paddingHorizontal: 6,
    textAlignVertical: 'bottom',
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: Colors.white,
  }
})