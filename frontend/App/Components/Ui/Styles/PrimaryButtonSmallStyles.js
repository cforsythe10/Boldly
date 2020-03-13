import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    width: 150,
    height: 30,
    marginVertical: 5,
    borderTopWidth: 0,
    borderRadius: 20,
    borderBottomWidth: 0,
    backgroundColor: Colors.magenta
  },
  buttonText: {
    marginVertical: 5,
    margin: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.white,
    fontSize: Fonts.size.small,
    ...Fonts.style.h6
  }
})
