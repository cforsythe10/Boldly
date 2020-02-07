import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    width: 250,
    height: 40,
    marginVertical: 5,
    borderTopWidth: 1,
    borderRadius: 20,
    borderBottomWidth: 1,
    backgroundColor: Colors.magenta
  },
  buttonText: {
    marginVertical: 5,
    margin: 5,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.medium
  }
})
