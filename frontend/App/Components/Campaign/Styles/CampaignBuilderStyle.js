import { StyleSheet } from 'react-native'
import { Colors, Fonts, ApplicationStyles } from '../../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding: 5
  },
  inputContainer: {
    margin: 10,
  },
  inputTitleText: {
    color: Colors.black,
    fontFamily: Fonts.style.body.fontFamily,
    fontSize: Fonts.style.body.fontSize
  },
  header: {
    marginLeft: 10,
    color: Colors.cobalt,
    fontFamily: Fonts.style.h4.fontFamily,
    fontSize: Fonts.style.h4.fontSize
  },
  submitButtonContainer: {

  },
  photoInputEmpty: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.black,
    borderRadius: 22.5,
    minHeight: 40,
    minWidth: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    marginHorizontal: '5%'
  },
  photoInputFull: {
    backgroundColor: Colors.pear
  }
})
