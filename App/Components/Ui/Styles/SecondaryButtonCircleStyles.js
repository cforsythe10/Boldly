import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderRadius: 96,
    borderBottomWidth: 2,
    backgroundColor: Colors.fog
    borderColor: Colors.charcoal
  },
  buttonText: {
    marginVertical: 5,
    margin: 5,
    color: Colors.charcoal,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold'
  }
})