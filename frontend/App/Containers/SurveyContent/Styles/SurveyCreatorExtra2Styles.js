import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	...Fonts.style.h3,
  	color: Colors.fog,
  	paddingVertical: '18%'
  },
  back:{
  	...Fonts.style.h2,
  	color: Colors.fog
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
  	flex: 5,
  	alignItems: 'center'	
  }
})
