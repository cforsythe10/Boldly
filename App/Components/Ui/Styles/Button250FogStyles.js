import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    height: 45,
    width: 250,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.fog,
    marginVertical: 5
  },
  buttonText: {
    color: Colors.charcoal,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    marginVertical: 5,
    margin: 5
  }
})
