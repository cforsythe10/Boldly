import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	...Fonts.style.h3,
  	color: Colors.fog
  },
  link: {
  	...Fonts.style.link,
  	color: Colors.fog
  },
  back:{
  	...Fonts.style.h2,
  	color: Colors.fog
  }
})
