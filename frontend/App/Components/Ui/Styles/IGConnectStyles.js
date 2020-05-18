import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../../Themes'


export default StyleSheet.create({
    ...ApplicationStyles.screen,
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
    ...Fonts.style.h6,
    flex: 13
  },
  loginButton: {
    width: 288,
    height: 40,
    justifyContent: 'center',
    marginVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.magenta,
    overflow: "hidden",
  },
  logoutButton: {
    width: 288,
    height: 40,
    justifyContent: 'center',
    marginVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.charcoal35,
    overflow: "hidden",
  },
  buttonFill: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: "nowrap",
      flexDirection: "row",
      paddingHorizontal: 32,
  },
  icon: {
      width: 8,
      resizeMode: 'contain',
        flex: 1
  },
  emptySpace: {
      flex: 1
  }
})
