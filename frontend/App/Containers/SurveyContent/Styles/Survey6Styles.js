import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	...Fonts.style.h3,
    paddingVertical: '4%',
  	color: Colors.fog
  },
  subtext: {
  	...Fonts.style.sh3,
  	color: Colors.fog
  },
  back:{
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  valueButtonContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  continueContainer: {
    flex: 1,
    height: '11%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent'
  },
})
