import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    height: 30,
    width: 150,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.fog,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.charcoal,
    textAlign: 'center',
    fontSize: Fonts.size.small,
    marginVertical: 5,
    margin: 5,
  }
})
