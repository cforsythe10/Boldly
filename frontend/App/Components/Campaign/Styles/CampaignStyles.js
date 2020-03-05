import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../Themes/';
import ApplicationStyles from '../../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  newUserContentBar: {
    borderTopWidth: 1,
    width: 160,
    borderColor: '#E1E1E1',
    alignItems: 'center',
    marginTop: '7%'
  },
  contentText: {
    ...Fonts.captions,
    color: Colors.charcoal,
    paddingVertical: '7%',
    textAlign: 'center'
  },
  darkText:{
    marginTop: 8,
    marginBottom: 8,
    ...Fonts.style.h4,
    color: Colors.charcoal
  },
})