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
  	color: Colors.fog
  },
  subtext: {
  	...Fonts.style.sh3,
  	color: Colors.fog
  }
})