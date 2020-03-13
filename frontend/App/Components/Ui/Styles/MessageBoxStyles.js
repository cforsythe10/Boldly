import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes/'

export default StyleSheet.create({
  messageBox: {
      borderRadius: 20,
      marginRight: 20,
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 18,
      paddingHorizontal: 15,
      paddingVertical: 7,
      flexDirection:'row',
      flex: -1,
      minWidth: 5,
      minHeight: 5
  },

  messageBoxLeft: {
    backgroundColor: '#ECECEC',
    borderBottomLeftRadius: 3
  },

  messageBoxTextLeft: {
    color: '#082029'
  },

  messageBoxRight: {
    backgroundColor: Colors.violet,
    borderBottomRightRadius: 3
  },

  messageBoxTextRight: {
    color: Colors.white
  },
})
