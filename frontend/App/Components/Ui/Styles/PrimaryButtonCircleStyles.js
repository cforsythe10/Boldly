import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderRadius: 96,
    borderBottomWidth: 1,
    backgroundColor: Colors.magenta
  },
  buttonText: {
    marginVertical: 5,
    margin: 5,
    color: Colors.white,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold'
  }
})
