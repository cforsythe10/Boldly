import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	...Fonts.style.h3,
  	color: Colors.fog,
  	paddingTop: '9%'
  },
  subtext: {
  	...Fonts.style.sh3,
  	color: Colors.fog,
    paddingTop: '2%',
    paddingBottom: 10
  },
  back:{
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  contentContainer: {
  	flex: 1,
    alignItems: 'center',
    
    marginVertical: 16,
  },
  continueContainer: {
    flex: 1,
    height: '11%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent'
  },
  locationContainer: {
    flex: 2,
    justifyContent: 'flex-start',
  	alignItems: 'center'
  }
})
