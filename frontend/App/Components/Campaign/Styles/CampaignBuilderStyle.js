import { StyleSheet } from 'react-native'
import { Colors, Fonts, ApplicationStyles } from '../../../Themes'
import ProfileScreenStyles from '../../../Containers/Styles/ProfileScreenStyle';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ProfileScreenStyles,
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
    fontSize: Fonts.style.body.fontSize,
    marginBottom: '2%',
    marginLeft: '6%'
  },
  header: {
    marginLeft: 10,
    color: Colors.cobalt,
    fontFamily: Fonts.style.h4.fontFamily,
    fontSize: Fonts.style.h4.fontSize
  },
  submitButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
    paddingLeft: '5%',
    paddingRight: '5%',
    marginHorizontal: '5%'
  },
  photoInputFull: {
    backgroundColor: Colors.pear,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.black,
    borderRadius: 22.5,
    minHeight: 40,
    minWidth: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginHorizontal: '5%'
  }
})
