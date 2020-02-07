import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    height: 30,
    width: 200,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.fog,
    marginVertical: 5,
  },
  buttonText: {
    color: Colors.charcoal,
    textAlign: 'center',
    margin: 5,
    fontSize: Fonts.size.small,
    marginVertical: 5
  }
})
