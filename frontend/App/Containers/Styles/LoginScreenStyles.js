import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	...Fonts.style.h2,
  	color: Colors.fog
  }

})
