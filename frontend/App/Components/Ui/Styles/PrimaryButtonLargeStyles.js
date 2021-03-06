import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    width: 288,
    height: 40,
    justifyContent: 'center',
    marginVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.magenta
  },
  buttonText: {
    marginVertical: 5,
    margin: 5,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.medium,
    ...Fonts.style.buttonLarge
  }
})
