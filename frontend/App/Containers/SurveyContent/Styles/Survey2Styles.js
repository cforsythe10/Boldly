import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  back: {
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  text: {
  	...Fonts.style.h3,
  	color: Colors.fog,
    paddingTop: '14%',
    marginBottom: 16,
  },
  subtext: {
  	...Fonts.style.sh3,
  	color: Colors.fog,
    paddingBottom: '16%'
  },
  continueContainer: {
    flex: 1,
    height: '11%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent'
  },
  contentContainer: {
    flex: 7,
    alignItems: 'center',
  }
})