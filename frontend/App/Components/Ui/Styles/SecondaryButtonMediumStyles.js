import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    height: 30,
    width: '88%',
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.fog,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.charcoal,
    textAlign: 'center',
    fontWeight: 'normal',
    ...Fonts.style.h6,
    marginVertical: Metrics.baseMargin
  }
})