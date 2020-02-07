import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes/'

export default StyleSheet.create({
  lines: {
    width: 24,
    height: 8,
    borderBottomWidth: 1.85,
    borderBottomColor: Colors.charcoal,
    borderTopWidth: 1.85,
    borderTopColor: Colors.charcoal
  },
  bottomLine: {
    height: 7.15,
    borderBottomColor: Colors.charcoal,
    borderBottomWidth: 1.85,
    width: 24
  }
})